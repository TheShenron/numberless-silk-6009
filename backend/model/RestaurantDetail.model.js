const mongoose = require('mongoose')

const restaurantDetailSchema = mongoose.Schema({
    image:{
        coverIMG:String,
        avatar:String
    },
    userType:{
        type:String,
        default:'restaurant'
    },
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    name:{
        type: String,
        unique: true
    },
    location:{
        address:String,
        openingHour: String,
        phoneNo:String
    },
    shopDetails:{
        foodType:String,
        environment:String,
        website:String,
        mealDeal:String,
        foodMenu:String,
        outlet:String,
        summery:{
            type:String,
            maxlength:1000
        }
    },
    about:{
        type:String,
        maxlength:1000
    }

})

const restaurantDetailModel = mongoose.model('restaurantDetail' , restaurantDetailSchema)

module.exports = { restaurantDetailModel }