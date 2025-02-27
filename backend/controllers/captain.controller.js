const CaptainModel = require('../models/captain.model');
const captainServices = require('../services/captain.services');
const blackListTokenModel = require('../models/blackListToken.model');  
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }   
    const {fullname,email,password,vehicle} = req.body;
    const isCaptainAlreadyExist = await CaptainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:'Captain already exist'});
    }

    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await captainServices.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });
    const token = captain.generateAuthToken();

    res.status(201).json({token,captain});
}
module.exports.loginCaptain = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    //console.log('Request Body:', req.body);
    const captain = await CaptainModel.findOne({email}).select('+password');
   // console.log('User Found:', user);
    if(!captain){
        return res.status(401).json({message:'Invalid email'});
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid  password'});
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
     
     res.status(200).json({token,captain});
     //console.log('User logged in successfully',user);
}
module.exports.getCaptainProfile = async (req, res,next) => {
        res.status(200).json(req.captain);
}
module.exports.logoutCaptain = async (req, res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blackListTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Captain Logout successfully' });
}