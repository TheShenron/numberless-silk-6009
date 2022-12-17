const mongoose = require('mongoose')

const UserFoodListMenuSchema = mongoose.Schema({
    image:String,
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    title:String,
    description:String,
    id:String

})

const UserFoodListMenuModel = mongoose.model('userFoodList' , UserFoodListMenuSchema)

module.exports = { UserFoodListMenuModel }