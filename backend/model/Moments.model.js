const mongoose = require('mongoose')

const UserFoodListMenuSchema = mongoose.Schema({
    image:String,
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    title:String,
    description:String,
    uid:String,
    userType:{
        type:String,
        default:'user'
    },
    user:{
        name:String,
        avatar:String
    },
    featured:{
        type:Boolean,
        default: false
    },

})

const MomentModel = mongoose.model('moment' , UserFoodListMenuSchema)

module.exports = { MomentModel }