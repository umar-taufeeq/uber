const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3,'First name must be at least 3 character long'],
        },
        lastname:{
            type: String,
            minlength: [3,'Last name must be at least 3 character long'],
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5,'Email must be at least 5 character long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    },
})
//generate token
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}
//comparing passwordit’s used to compare an entered plain-text password
//  with the hashed password stored in the database.
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
//Hashes the plain-text password with a salt generated using 10 rounds.
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;

