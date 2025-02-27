const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3, 'First name must be at least 3 characters long']
        },
        lastname:{
            type: String,
            minlength:[3, 'Last name must be at least 3 characters long']  
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    },
    status:{
        type: String,
        enum:['active', 'inactive'],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true,
            minlength:[3, 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            enum:['car', 'motorcycle', 'auto'],
            required: true,
        },  
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }
});
//generate token
CaptainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
//comparing passwordit’s used to compare an entered plain-text password
//  with the hashed password stored in the database.
CaptainSchema.methods.comparePassword = async function(Password){
    return await bcrypt.compare(Password, this.password);
}
//Hashes the plain-text password with a salt generated using 10 rounds.
CaptainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const CaptainModel = mongoose.model('captain', CaptainSchema);
module.exports = CaptainModel;

