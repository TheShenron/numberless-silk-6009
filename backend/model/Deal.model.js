const mongoose = require('mongoose')

const dealSchema = mongoose.Schema({
    title:String,
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    image:String,
    price:String,
    discount:String,
    coupon:String,
    details:String,
    restriction:String,
    location:String,
    tac:String,
    uid:String,
    userType:{
        type:String,
        default:'restaurant'
    },
    featured:{
        type:Boolean,
        default: false
    },

})

const DealModel = mongoose.model('deal' , dealSchema)

module.exports = { DealModel }