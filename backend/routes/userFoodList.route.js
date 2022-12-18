const { Router } = require('express')
const userfood = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')


//UserModel DB
const { userModel } = require('../model/User.model')
const { UserFoodListMenuModel } = require('../model/UserFoodList.model')
const { checkField , RcheckField } = require('../middleware/CheckField')


//routes

//get restaurant food menu list...
userfood.get('/',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]

        try {

            //geting data from token
            const tokenData = check_jwt(token)
            
            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food menue is only for User", status: false })

            //geting data from rest food menu DB
            const foodList = await UserFoodListMenuModel.find({ id: tokenData.id })

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while feting rest food menu", status: false })
        }
    })



//add rest food menu
const userFoodData = {
    image:"string",
    title:"string",
    description:"string"
}
userfood.post('/add',
    tokenInHeader,
    (req,res,next)=>{checkField(req,res,next,userFoodData)},
    async (req, res) => {
        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food menue is only for User", status: false })

            //adding data in resFoodList...
            bodyData.id = tokenData.id
            const isAdded = new UserFoodListMenuModel(bodyData)
            await isAdded.save()

            res.send({ msg: "FoodList Added", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while adding data in resFoodList ", status: false })
        }

    })





//update rest food menu
userfood.put('/update/:id',
    tokenInHeader,
    (req,res,next)=>{RcheckField(req,res,next,userFoodData)},
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body
        const ID = req.params.id

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food menue is only for User", status: false })

            //find and update
            const isDone = await UserFoodListMenuModel.findOneAndUpdate({ id: tokenData.id, _id: ID }, bodyData)

            if (isDone == null) return res.send({ msg: "FoodItem is not present", status: false })


            res.send({ msg: "FoodList updated", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while updating data in resFoodList ", status: false })
        }

    })




//delete rest food menu
userfood.delete('/delete/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const ID = req.params.id

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food menue is only for User", status: false })

            //find and update
            const isDone = await UserFoodListMenuModel.findOneAndDelete({ id: tokenData.id, _id: ID })

            if (isDone == null) return res.send({ msg: "FoodItem is not present", status: false })

            res.send({ msg: "FoodList deleted", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodList ", status: false })
        }

    })





module.exports = { userfood }