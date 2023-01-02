const mongoose = require('mongoose')

const userDetailSchema = mongoose.Schema({
    image:{
        coverIMG:String,
        avatar:String
    },
    userType:{
        type:String,
        default:"user"
    },
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    name:{
        type: String,
        unique: true
    },
    gender:String,
    location:{
        type:String
    },
    occupation:{
        type:String,
        default: ''
    },
    website:{
        type:String,
        default: ''
    },
    about:{
        type:String,
        maxlength:1000
    },
    uid:{
        type:String,
        required: true
    }

})

const userDetailModel = mongoose.model('userDetail' , userDetailSchema)

module.exports = { userDetailModel }