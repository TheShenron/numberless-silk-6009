function tokenInHeader (req,res,next){

    let token = req.headers['authorization']
    if(token === undefined) return res.send({msg : "Token not present. Login Again"})
    
    next()

}

module.exports = { tokenInHeader }