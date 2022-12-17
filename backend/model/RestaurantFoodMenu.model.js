const mongoose = require('mongoose')

const restaurantFoodMenuSchema = mongoose.Schema({
    image:String,
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    title:String,
    description:String,
    id:String

})

const restaurantFoodMenuModel = mongoose.model('restaurantFoodMenu' , restaurantFoodMenuSchema)

module.exports = { restaurantFoodMenuModel }