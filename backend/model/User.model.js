const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    googleid:{
        type:String,
        default:"NAN"    
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        // required:true
    },
    username:{
        type:String,
        // required: true
    },
    dob:{
        type:String,
        // required: true
    },
    contary:{
        type:String,
        // required: true
    },
    state:{
        type:String,
        // required: true
    },
    gender:{
        type:String,
        // required: true
    },
    avatar:{
        type:String,
        default:'https://ih1.redbubble.net/image.2920065879.0555/st,small,507x507-pad,600x600,f8f8f8.jpg'
    }

    
} , {timestamps:true})


userSchema.methods.matchPassword = async (enteredPassword)=>{
    
    return await bcrypt.compare(enteredPassword , this.password)
}


userSchema.pre('save' , async function(req,res,next){


    if(req.body && req.body.password ){

        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password , salt)

    }

})



const userModel = mongoose.model('user' , userSchema)

module.exports = { userModel }