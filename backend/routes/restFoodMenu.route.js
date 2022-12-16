const { Router } = require('express')
const restMenue = Router()

//middlewares
const { hashpassword, compareHash } = require('../middleware/Hashing')
const { create_jwt, check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')


//UserModel DB
const { userModel } = require('../model/User.model')
const { restaurantFoodMenuModel } = require('../model/RestaurantFoodMenu.model')



//routes

//get restaurant food menu list...
restMenue.get('/',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //geting data from rest food menu DB
            const foodList = await restaurantFoodMenuModel.find({ id: tokenData.id })

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while feting rest food menu", status: false })
        }
    })



//add rest food menu
restMenue.post('/add',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

            //adding data in resFoodList...
            bodyData.id = tokenData.id
            const isAdded = new restaurantFoodMenuModel(bodyData)
            await isAdded.save()

            res.send({msg:"FoodList Added" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while adding data in resFoodList " , status: false})
        }

    })





//update rest food menu
restMenue.post('/update/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body
        const ID = req.params.id

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

            //find and update
            const isDone = await restaurantFoodMenuModel.findOneAndUpdate({id:tokenData.id , _id:ID} , bodyData)

            if(isDone == null) return res.send({msg:"FoodItem is not present" , status: false})


            res.send({msg:"FoodList updated" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while updating data in resFoodList " , status: false})
        }

    })




//delete rest food menu
restMenue.post('/delete/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const ID = req.params.id

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

            //find and update
            const isDone = await restaurantFoodMenuModel.findOneAndDelete({id:tokenData.id , _id:ID})

            if(isDone == null) return res.send({msg:"FoodItem is not present" , status: false})

            res.send({msg:"FoodList deleted" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while deleted data in resFoodList " , status: false})
        }

    })





module.exports = { restMenue }