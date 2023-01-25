const mongoose = require('mongoose')

const UserFoodRecipeSchema = mongoose.Schema({
    title:String,
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
    category:String,
    uid:String,
    userType:{
        type:String,
        default:'user'
    },
    featured:{
        type:Boolean,
        default: false
    },
    user:{
        name:String,
        avatar:String
    }

})

const recipeModel = mongoose.model('recipe' , UserFoodRecipeSchema)

module.exports = { recipeModel }