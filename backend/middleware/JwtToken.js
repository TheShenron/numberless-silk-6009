const jwt = require('jsonwebtoken')
require('dotenv').config()

 function create_jwt(value = {}){

    let isEmpty =  Object.keys(value).length === 0

    if(isEmpty){
        return false
    }

    const newToken = jwt.sign(value , process.env.SECRATE_KEY , {expiresIn:process.env.EXP_TIME})

    return newToken

}


function check_jwt(str){

    if( str == "") return false

    let resp = jwt.verify(str , process.env.SECRATE_KEY)

    return resp

}


module.exports = { create_jwt , check_jwt}