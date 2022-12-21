const mongoose = require('mongoose')

const restaurantFoodMenuSchema = mongoose.Schema({
    image:String,
    title:String,
    description:String,
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    uid:String,
    userType:{
        type:String,
        default:'restaurant'
    },
    featured:{
        type:Boolean,
        default: false
    }

})

const FoodMenuModel = mongoose.model('menu' , restaurantFoodMenuSchema)

module.exports = { FoodMenuModel }