const { Router } = require('express')
const restaurant = Router()


//UserModel DB
const { restaurantDetailModel } = require('../model/RestaurantDetail.model')


//routes

//get restaurant food menu list...
restaurant.get('/', async (req, res) => {

        let id = req.query

        try {

            //geting data from rest food menu DB
            const List = await restaurantDetailModel.find({ id })

            if(List === null) return res.send({msg:"Invalid Id" , status:false})

            res.send({ msg: "success", data: List })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting restaurant list", status: false })
        }
    })




module.exports = { restaurant }