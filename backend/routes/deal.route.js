const { Router } = require('express')
const deal = Router()

//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField , RcheckField } = require('../middleware/CheckField')


//UserModel DB
const { userModel } = require('../model/User.model')
const { DealModel } = require('../model/Deal.model')

//routes

//get restaurant food menu list...
deal.get('/', async (req, res) => {

        const query = req.query

        try {

            //geting data from rest food menu DB
            const foodList = await DealModel.find( query )

            res.send({ msg: "success", data: foodList })

        } catch (error) {
            console.log(error)
            res.send({ msg: "error while feting deal", status: false })
        }
    })



//add rest food menu
const addRestMenueData = {
    title:"String",
    image:"String",
    price:"String",
    discount:"String",
    coupon:"String",
    details:"String",
    restriction:"String",
    location:"String",
    tac:"String",
}
deal.post('/add',
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
            const isAdded = new DealModel(bodyData)
            await isAdded.save()

            res.send({msg:"Deal Added" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while adding Deal " , status: false})
        }

    })





//update rest food menu
const updateRestMenueData  = {
    title:"String",
    image:"String",
    price:"String",
    discount:"String",
    coupon:"String",
    details:"String",
    restriction:"String",
    location:"String",
    tac:"String",
}
deal.put('/update/:id',
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
            const isDone = await DealModel.findOneAndUpdate({uid:tokenData.id , _id:ID} , bodyData)

            if(isDone == null) return res.send({msg:"Deal is not present" , status: false})


            res.send({msg:"Deal updated" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while updating deal " , status: false})
        }

    })




//delete rest food menu
deal.delete('/delete/:id',
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
            const isDone = await DealModel.findOneAndDelete({uid:tokenData.id , _id:ID})

            if(isDone == null) return res.send({msg:"Deal is not present" , status: false})

            res.send({msg:"Deal deleted" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while deleted Deal " , status: false})
        }

    })






//makeFeature rest food menu
deal.patch('/f/:id',
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
            const isfind = await DealModel.findOneAndUpdate({uid:tokenData.id , featured:true} , {featured:false})
            console.log(isfind)
            
            //find and update
            const isDone = await DealModel.findOneAndUpdate({uid:tokenData.id , _id:ID} , {featured:true})

            if(isDone == null) return res.send({msg:"Deal is not present" , status: false})

            res.send({msg:"Deal featured changed" , status:true})

        } catch (error) {
            console.log(error)
            res.send({msg:"error while Deal Featured" , status: false})
        }

    })








module.exports = { deal }