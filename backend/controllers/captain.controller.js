const CaptainModel = require('../models/captain.model');
const captainServices = require('../services/captain.services');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }   
    const {fullname,email,password,vechile} = req.body;
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
        color:vechile.color,
        plate:vechile.plate,
        capacity:vechile.capacity,
        vechileType:vechile.vechileType
    });
    const token = captain.generateAuthToken();

    res.status(201).json({token,captain});
}