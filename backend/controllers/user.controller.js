const userModel = require('../models/user.model');
const userServices = require('../services/user.services');
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../models/blackListToken.model');

module.exports.registerUser= async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password} = req.body;
    const isUserAlreadyExist = await userModel.findOne({email});
    if(isUserAlreadyExist){
        return res.status(400).json({message:'User already exist'});
    }

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
    res.cookie('token', token);
     
     res.status(200).json({token,user});
     //console.log('User logged in successfully',user);
}
module.exports.getUserProfile = async (req, res,next) => {
     res.status(200).json(req.user);
}
module.exports.logoutUser = async (req, res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token|| req.headers.authorization.split(' ')[1];
    await blackListTokenModel.create({token})
    res.status(200).json({message:'User logged out successfully'});
}