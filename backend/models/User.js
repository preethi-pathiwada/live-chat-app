const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    identifier:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    timeStamps:true
});

module.exports = mongoose.model('User', userSchema);