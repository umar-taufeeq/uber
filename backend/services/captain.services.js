const CaptainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password,color,plate,capacity,vehicleType
}) =>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('Please provide all the required fields');
    }
    const captain= CaptainModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}