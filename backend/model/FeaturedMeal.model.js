const mongoose = require('mongoose')

const featuredMealSchema = mongoose.Schema({

    foodMenuID:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        default:''
    }

})

const featuredMealModel = mongoose.model('featureMeal' , featuredMealSchema)

module.exports = { featuredMealModel }