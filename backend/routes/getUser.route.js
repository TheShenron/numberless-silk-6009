const { Router } = require('express')
const user = Router()


//UserModel DB
const { userDetailModel } = require('../model/UserDetails.model')


//routes

//get restaurant food menu list...
user.get('/', async (req, res) => {

        let id = req.query

        try {

            //geting data from rest food menu DB
            const List = await userDetailModel.find(id)

            if(List === null) return res.send({msg:"Invalid Id" , status:false})

            res.send({ msg: "success", data: List })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting user list", status: false })
        }
    })




module.exports = { user }