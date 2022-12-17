const { Router } = require('express')
const moments = Router()


//UserModel DB
const { UserFoodListMenuModel} = require('../model/UserFoodList.model')


//routes

//get restaurant food menu list...
moments.get('/', async (req, res) => {

        let id = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await UserFoodListMenuModel.find({ id })

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting all user food moment", status: false })
        }
    })




module.exports = { moments }