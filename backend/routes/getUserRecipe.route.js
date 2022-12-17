const { Router } = require('express')
const recipe = Router()


//UserModel DB
const { UserFoodRecipeModel } = require('../model/UserFoodRecipe.model')

//routes

//get restaurant food menu list...
recipe.get('/', async (req, res) => {

        let id = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await UserFoodRecipeModel.find({ id })

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting all user recipe ", status: false })
        }
    })




module.exports = { recipe }