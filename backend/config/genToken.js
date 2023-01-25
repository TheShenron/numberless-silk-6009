const jwt = require('jsonwebtoken')

const getToken = (id)=>{

    return jwt.sign({id} , process.env.SECRATE_KEY , {expiresIn : '30m'})
}

module.exports = getToken

