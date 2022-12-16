const mongoose = require('mongoose')

const UserFoodRecipeSchema = mongoose.Schema({
    title:{
        img:String,
    },
    dateOfCreated:{
        type:Date,
        default: Date.now
    },
    image:String,
    time:String,
    servings:String,
    diet_restriction:String,
    description:String,
    ingredients:String,
    category:String

})

const UserFoodRecipeModel = mongoose.model('userFoodRecipe' , UserFoodRecipeSchema)

module.exports = { UserFoodRecipeModel }