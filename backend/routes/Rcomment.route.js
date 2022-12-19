const { Router } = require('express')
const Rcomment = Router()

//middlewares
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField } = require('../middleware/CheckField')
const { check_jwt } = require('../middleware/JwtToken')

//Db
const { rcommentModel } = require('../model/R_Comment.model')
const { restaurantDetailModel } = require('../model/RestaurantDetail.model')
const { userDetailModel } = require('../model/UserDetails.model')



//get comments
Rcomment.get('/:id', async (req, res) => {

    try {

        //geting comment in DB
        const allComment = await rcommentModel.find({ foodmenuID: req.params.id })

        res.send({ msg: "comment", status: true, list: allComment })

    } catch (error) {
        console.log(error)
        res.send({ msg: "error while getting comments", status: false })
    }

})



//adding comment to DB
const addCom = {
    foodmenuID: "",
    userID: "",
    comment: ""
}
Rcomment.post('/add/:user/:id',
    tokenInHeader,
    (req, res, next) => { checkField(req, res, next, addCom) },
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const userType = req.params.user
        const id = req.params.id

        try {
            
            //geting data from token
            const tokenData = check_jwt(token)

            //checking docID is Valid or not
            



        } catch (error) {
            console.log(error)
            res.send({msg:"error while adding comment" , status:false})
        }


    })


module.exports = { Rcomment }

// const addComment = new rcommentModel({
//     foodmenuID:"",
//     userID:"",
//     comment:""
// })