const { Router } = require('express')
const recipe = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField , RcheckField } = require('../middleware/CheckField')


//UserModel DB
const { userModel } = require('../model/User.model')
const { RecipeModel } = require('../model/Recipe.model')

//routes

//get user food menu list...
recipe.get('/', async (req, res) => {

        const query = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await RecipeModel.find( query )

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in RecipeList", status: false })
        }
    })



//add user food menu
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
recipe.post('/add',
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
            bodyData.uid = tokenData.id
            const isAdded = new RecipeModel(bodyData)
            await isAdded.save()

            res.send({ msg: "FoodRecipe Added", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList", status: false })
        }

    })





//update rest food menu
recipe.put('/update/:id',
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
            const isDone = await RecipeModel.findOneAndUpdate({ id: tokenData.id, _id: ID }, bodyData)

            if (isDone == null) return res.send({ msg: "FoodRecipe is not present", status: false })


            res.send({ msg: "FoodRecipe updated", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList ", status: false })
        }

    })




//delete rest food menu
recipe.delete('/delete/:id',
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
            const isDone = await RecipeModel.findOneAndDelete({ id: tokenData.id, _id: ID })

            if (isDone == null) return res.send({ msg: "FoodRecipe is not present", status: false })

            res.send({ msg: "FoodList deleted", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodRecipeList ", status: false })
        }

    })



//makeFeature rest food menu
recipe.patch('/f/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const ID = req.params.id

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

            //checking userType 
            const userType = await userModel.findById({_id:tokenData.id})
            if(userType.userType === 'user') return res.send({msg:"Food menue is only for Restaurant" , status:false})


            //finding pre feature
            const isfind = await RecipeModel.findOneAndUpdate({uid:tokenData.id , featured:true} , {featured:false})
            console.log(isfind)
            
            //find and update
            const isDone = await RecipeModel.findOneAndUpdate({uid:tokenData.id , _id:ID} , {featured:true})

            if(isDone == null) return res.send({msg:"Recipe is not present" , status: false})

            res.send({msg:"Recipe featured changed" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while Recipe featured " , status: false})
        }

    })


module.exports = { recipe }