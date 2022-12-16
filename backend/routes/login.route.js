const { Router } = require('express')
const login = Router()


//for Google Aouth
const passport = require('passport');
require('../middleware/Passport')
login.use(passport.initialize())
login.use(passport.session())

//middlewares
const { hashpassword , compareHash } = require('../middleware/Hashing')
const { create_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')

//UserModel DB
const { userModel } = require('../model/User.model')
const { userDetailModel } = require('../model/UserDetails.model')
const { restaurantDetailModel } = require('../model/RestaurantDetail.model')




//login with google user are redirect to this route ...
login.get('/', async (req, res) => {

    if (req.user === undefined || Object.keys(req.user).length == 0) {
        // console.log("data gating undefined at /google")
        res.send({ msg: "Error", status: false })
        return
    }

    try {
        const userData = req.user
        const _name = userData.displayName
        const _email = userData.email
        const _profileIMG = userData.picture

        //Email is Get by Google 
        let isPresent = await userModel.findOne({ email: _email })

        if(isPresent === null) return res.send({msg:"Email Not Present! Please Signin" , status: false})

        let token = create_jwt({
            id: isPresent._id,
            email: _email,
        })

        res.send({ msg: "login Successfully by Google", token, detail: { name: _name, email: _email, avatar: _profileIMG, type: isPresent.userType  , doc:isPresent.dateOfCreated}, status: true })


    } catch (error) {
        console.log(error)
        res.send({ msg: 'Server Error' })
    }

})


//login with google

login.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

login.get('/google/callback', passport.authenticate('google', { successRedirect: '/login', failureRedirect: '/failure' }));





//user login with gmail ....
//middleware to check the token from the header -> Done
login.post('/',  async (req, res) => {

        let Body = req.body

        let email = Body.email.toLowerCase()
        let password = Body.password

        try {

            let isPresent = await userModel.findOne({ email })


            //checking email is present or not
            if (isPresent === null) return res.send({ mag: "User not Exist", status: false })

            //checking password filed is present or not 
            if (isPresent.password === undefined) return res.send({ msg: "password not set! Login with Google account and set password ", status: false })

            //deCoding password and checking..
            let isMatch = compareHash(password, isPresent.password)


            if (isMatch == false) return res.send({ msg: "Incorrect Password", status: false })

            //creating Token..
            let token = create_jwt({
                id: isPresent._id,
                email: isPresent.email
            })


            res.send({ mag: "login successfully by email/pass", token, status: true , detail:{type:isPresent.userType , email:isPresent.email , doc:isPresent.dateOfCreated} })

        } catch (error) {
            console.log("Error while /login post req")
            res.send({ msg: "Error" })
        }
    })




module.exports = { login }