const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    userType:{
        type:String,
        required: true
    },
    avatar:{
        type:String,
        default:'https://ih1.redbubble.net/image.2920065879.0555/st,small,507x507-pad,600x600,f8f8f8.jpg'
    },
    dateOfCreated:{
        type:Date,
        default: Date.now
    }

    
})

const userModel = mongoose.model('user' , userSchema)

module.exports = { userModel }