const { Router } = require('express')
const moment = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')


//UserModel DB
const { userModel } = require('../model/User.model')
const { checkField , RcheckField } = require('../middleware/CheckField')
const { MomentModel } = require('../model/Moments.model')

//routes

//get user food menu list...
moment.get('/', async (req, res) => {

        const query = req.query

        try {
            
            //geting data from rest food menu DB
            const foodList = await MomentModel.find(query)

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while feting user food menu", status: false })
        }
    })



//add rest food menu
const userFoodData = {
    image:"string",
    title:"string",
    description:"string",
    user:"string"
}
moment.post('/add',
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
            bodyData.uid = tokenData.id
            const isAdded = new MomentModel(bodyData)
            await isAdded.save()

            res.send({ msg: "FoodList Added", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while adding data in resFoodList ", status: false })
        }

    })





//update user food menu
moment.put('/update/:id',
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
            const isDone = await MomentModel.findOneAndUpdate({ id: tokenData.id, _id: ID }, bodyData)

            if (isDone == null) return res.send({ msg: "FoodItem is not present", status: false })


            res.send({ msg: "FoodList updated", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while updating data in resFoodList ", status: false })
        }

    })




//delete user food menu
moment.delete('/delete/:id',
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
            const isDone = await MomentModel.findOneAndDelete({ id: tokenData.id, _id: ID })

            if (isDone == null) return res.send({ msg: "FoodItem is not present", status: false })

            res.send({ msg: "FoodList deleted", status: true })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while deleted data in resFoodList ", status: false })
        }

    })






//makeFeature rest food menu
moment.patch('/f/:id',
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
        const isfind = await MomentModel.findOneAndUpdate({uid:tokenData.id , featured:true} , {featured:false})
        console.log(isfind)
        
        //find and update
        const isDone = await MomentModel.findOneAndUpdate({uid:tokenData.id , _id:ID} , {featured:true})

        if(isDone == null) return res.send({msg:"Moment is not present" , status: false})

        res.send({msg:"Moment featured changed" , status:true})

    } catch (error) {
        console.log(error)
        res.send({msg:"error while Moment featured " , status: false})
    }

})



module.exports = { moment }