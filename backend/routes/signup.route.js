const { Router } = require('express')
const signup = Router()


//middlewares
const { hashpassword } = require('../middleware/Hashing')
const { create_jwt } = require('../middleware/JwtToken')

//UserModel DB
const { userModel } = require('../model/User.model')
const { userDetailModel } = require('../model/UserDetails.model')
const { restaurantDetailModel } = require('../model/RestaurantDetail.model')



//route for signup --> otp on reg number
//signin with student ID and All detail are feched from student DB
signup.post('/', async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const avatar = req.body.avatar
    const userData = req.body


    try {

        //checking is number wuth same email is register or not
        const isPresent = await userModel.findOne({ email: email })
        if (isPresent !== null) return res.send({ msg: "Email already registered!", status: false })

        //opt send and get....
        const isCorrect = true

        console.log(isPresent)
        //hashing password
        let hash = hashpassword(password)
        console.log(hash)

        //check after opt
        const create_User = new userModel({
            email,
            password: hash,
            avatar,
            userType: userData.userType
        })


        let resp = await create_User.save()

        //adding data in userDetail DB..
        const userType = userData.userType

        userData.details.uid = resp._id

        if (userType === 'user') {
            const addData = new userDetailModel(userData.details)
            await addData.save()
        } else {
            const addData = new restaurantDetailModel(userData.details)
            await addData.save()
        }

        //creating token
        const token = create_jwt({ id: resp._id, email: resp.email, userType: resp.userType })

        res.send({ msg: "signup successfully", token, status: true, detail: { type: resp.userType, email: resp.email, doc: resp.dateOfCreated , avatar:resp.avatar } })


    } catch (error) {
        console.log(error)
        res.send({ msg: "Error while signup", status: false })
    }

    
})




module.exports = { signup }