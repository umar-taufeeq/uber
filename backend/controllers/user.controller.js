const userModel = require('../models/user.model');
const userServices = require('../services/user.services');
const {validationResult} = require('express-validator');


module.exports.registerUser= async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userServices.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });
    //create token
    const token = user.generateAuthToken();
    res.status(201).json({token,user});
   // console.log('User registered successfully',user);

}

module.exports.loginUser = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    //console.log('Request Body:', req.body);
    const user = await userModel.findOne({email}).select('+password');
   // console.log('User Found:', user);
    if(!user){
        return res.status(401).json({message:'Invalid email'});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid  password'});
    }
    const token = user.generateAuthToken();
     res.status(200).json({token,user});
     //console.log('User logged in successfully',user);
}