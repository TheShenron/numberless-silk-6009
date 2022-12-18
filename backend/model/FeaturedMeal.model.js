const mongoose = require('mongoose')

const featuredMealSchema = mongoose.Schema({

    foodMenuID:{ 
        type:String,
        default:"",
        required:true,
    },
    id:{
        type:String,
        default:'',
        required:true
    }

})

const featuredMealModel = mongoose.model('featureMeal' , featuredMealSchema)

module.exports = { featuredMealModel }