const { Router } = require('express')
const foodmenu = Router()


//UserModel DB
const { restaurantFoodMenuModel } = require('../model/RestaurantFoodMenu.model')



//routes

//get restaurant food menu list...
foodmenu.get('/', async (req, res) => {

        let id = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await restaurantFoodMenuModel.find(id)

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting rest food menu", status: false })
        }
    })




module.exports = { foodmenu }