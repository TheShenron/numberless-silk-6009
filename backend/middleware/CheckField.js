function checkField(req,res,next , DTforLogin){

    const fields = req.body

    for(let key in DTforLogin){

        if(fields[key] == undefined){
            res.send("Fields are missing")
            return false
        }
        
    }

    next()
    

}


function RcheckField(req,res,next , DTforLogin){

    const fields = req.body

    for(let key in fields){

        if(DTforLogin[key] == undefined){
            res.send("Fields are missing")
            return false
        }
        
    }

    next()
    

}




module.exports = { checkField , RcheckField }