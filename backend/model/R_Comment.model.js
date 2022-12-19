const mongoose = require('mongoose')

const RcommentSchema = mongoose.Schema({

    foodmenuID:{ 
        type:String,
        default:"",
        required:true,
    },
    userID:{
        type:String,
        default:'',
        required:true
    },
    comment:String

})

const rcommentModel = mongoose.model('rcomment' , RcommentSchema)

module.exports = { rcommentModel }