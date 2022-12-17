const { Router } = require('express')
const userRecipe = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField , RcheckField } = require('../middleware/CheckField')


//UserModel DB
const { userModel } = require('../model/User.model')
const { UserFoodRecipeModel } = require('../model/UserFoodRecipe.model')

//routes

//get restaurant food menu list...
userRecipe.get('/',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food recipe is only for User", status: false })

            //geting data from rest food menu DB
            const foodList = await UserFoodRecipeModel.find({ id: tokenData.id })

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList", status: false })
        }
    })



//add rest food menu
const userRecipeData = {
    title:"",
    image:"",
    time:"",
    servings:"",
    diet_restriction:"",
    description:"",
    ingredients:"",
    category:"",
}
userRecipe.post('/add',
    tokenInHeader,
    (req,res,next)=>{checkField(req,res,next,userRecipeData)},
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food recipe is only for User", status: false })

            //adding data in resFoodList...
            bodyData.id = tokenData.id
            const isAdded = new UserFoodRecipeModel(bodyData)
            await isAdded.save()

            res.send({ msg: "FoodRecipe Added", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList", status: false })
        }

    })





//update rest food menu
userRecipe.put('/update/:id',
    tokenInHeader,
    (req,res,next)=>{RcheckField(req,res,next,userRecipeData)},
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body
        const ID = req.params.id

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food recipe is only for User", status: false })

            //find and update
            const isDone = await UserFoodRecipeModel.findOneAndUpdate({ id: tokenData.id, _id: ID }, bodyData)

            if (isDone == null) return res.send({ msg: "FoodRecipe is not present", status: false })


            res.send({ msg: "FoodRecipe updated", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList ", status: false })
        }

    })




//delete rest food menu
userRecipe.delete('/delete/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const ID = req.params.id

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({ _id: tokenData.id })
            if (userType.userType === 'restaurant') return res.send({ msg: "Food recipe is only for User", status: false })

            //find and update
            const isDone = await UserFoodRecipeModel.findOneAndDelete({ id: tokenData.id, _id: ID })

            if (isDone == null) return res.send({ msg: "FoodRecipe is not present", status: false })

            res.send({ msg: "FoodList deleted", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList ", status: false })
        }

    })





module.exports = { userRecipe }