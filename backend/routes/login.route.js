const { Router } = require('express')
const login = Router()


//for Google Aouth
const passport = require('passport');
require('../middleware/Passport')
login.use(passport.initialize())
login.use(passport.session())

//middlewares
const { compareHash } = require('../middleware/Hashing')
const { create_jwt, check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')
const { checkField } = require('../middleware/CheckField')

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

        if (isPresent === null) return res.send({ msg: "Email Not Present! Please Signin", status: false })

        let token = create_jwt({
            id: isPresent._id,
            email: _email,
            userType: isPresent.userType
        })

        res.send({ msg: "login Successfully by Google", token, detail: { name: _name, email: _email, avatar: _profileIMG }, status: true })


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
const loginPostData = {
    email: 'string',
    password: 'string'
}
login.post('/',
    (req, res, next) => { checkField(req, res, next, loginPostData) },
    async (req, res) => {

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
                email: isPresent.email,
                userType: isPresent.userType
            })


            res.send({ mag: "login successfully by email/pass", token, status: true })

        } catch (error) {
            console.log("Error while /login post req")
            res.send({ msg: "Error" })
        }
    })




//login user details
login.get('/details',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking which type of user is this
            const user = await userModel.findOne({ id: tokenData.id })



            if (user === null) return res.send({ msg: "Invalid User ", status: false })

            //checking type and gating data from DB
            if (tokenData.userType === 'user') {

                const userData = await userDetailModel.findOne({ id: tokenData.id })

                if (userData == null) return res.send({ msg: "userDetails not present", status: false })

                return res.send({ msg: "user Details found", status: true, details: userData })

            } else {

                const userData = await restaurantDetailModel.findOne({ id: tokenData.id })

                if (userData == null) return res.send({ msg: "userDetails not present", status: false })

                return res.send({ msg: "user Details found", status: true, details: userData })


            }


        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting user details" })
        }


    })

module.exports = { login }