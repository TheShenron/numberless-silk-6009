const bcrypt = require('bcrypt')

function hashpassword (str) {

    if(str == '') return false

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(str , salt) 
    return hash

}


function compareHash (str , prehash) {

    return bcrypt.compareSync(str , prehash);
    
}

module.exports = { hashpassword , compareHash }