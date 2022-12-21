const { Router } = require('express')
const menu = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField , RcheckField } = require('../middleware/CheckField')


//UserModel DB
const { userModel } = require('../model/User.model')
const { FoodMenuModel } = require('../model/FoodMenu.model')


//routes

//get restaurant food menu list...
menu.get('/', async (req, res) => {

        const query = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await FoodMenuModel.find( query )

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while feting rest food menu", status: false })
        }
    })



//add rest food menu
const addRestMenueData = {
    image:"string",
    title:"string",
    description:"string" 
}
menu.post('/add',
    tokenInHeader,
    (req,res,next) =>{checkField(req,res,next,addRestMenueData)},
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

             //checking userType 
             const userType = await userModel.findById({_id:tokenData.id})
             if(userType.userType === 'user') return res.send({msg:"Food menue is only for Restaurant" , status:false})

            //adding data in resFoodList...
            bodyData.uid = tokenData.id
            const isAdded = new FoodMenuModel(bodyData)
            await isAdded.save()

            res.send({msg:"FoodList Added" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while adding data in resFoodList " , status: false})
        }

    })





//update rest food menu
const updateRestMenueData  = {
    image:"string",
    title:"string",
    description:"string"
}
menu.put('/update/:id',
    tokenInHeader,
    (req,res,next)=>{RcheckField(req,res,next,updateRestMenueData)},
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const bodyData = req.body
        const ID = req.params.id

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

             //checking userType 
             const userType = await userModel.findById({_id:tokenData.id})
             if(userType.userType === 'user') return res.send({msg:"Food menue is only for Restaurant" , status:false})

            //find and update
            const isDone = await FoodMenuModel.findOneAndUpdate({id:tokenData.id , _id:ID} , bodyData)

            if(isDone == null) return res.send({msg:"FoodItem is not present" , status: false})


            res.send({msg:"FoodList updated" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while updating data in resFoodList " , status: false})
        }

    })




//delete rest food menu
menu.delete('/delete/:id',
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

            //find and update
            const isDone = await FoodMenuModel.findOneAndDelete({id:tokenData.id , _id:ID})

            if(isDone == null) return res.send({msg:"FoodItem is not present" , status: false})

            res.send({msg:"FoodList deleted" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while deleted data in resFoodList " , status: false})
        }

    })





//makeFeature rest food menu
menu.patch('/f/:id',
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
            const isfind = await FoodMenuModel.findOneAndUpdate({uid:tokenData.id , featured:true} , {featured:false})
            console.log(isfind)
            
            //find and update
            const isDone = await FoodMenuModel.findOneAndUpdate({uid:tokenData.id , _id:ID} , {featured:true})

            if(isDone == null) return res.send({msg:"Menu is not present" , status: false})

            res.send({msg:"Menu featured changed" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while Menu featured " , status: false})
        }

    })







module.exports = { menu }