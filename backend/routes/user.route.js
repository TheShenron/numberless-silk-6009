const { Router } = require('express')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const { googleLogin } = require('../middleware/googleMiddleware')


const userRoute = Router()


userRoute.use(passport.initialize())

passport.serializeUser((user, cb) => {
    cb(null, user)
})

passport.deserializeUser((obj, cb) => {
    cb(null, obj)
})

passport.use(new Strategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRATE,
    callbackURL: process.env.CALLBACKURL,
},
    function (accToken, refToken, profile, done) {
        // console.log(profile , "Profile")
        done(null, profile)
    }
))


userRoute.get('/google', passport.authenticate('google', { scope: ['email profile'] }))

userRoute.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/user/fail' }),
    googleLogin
)


userRoute.get('/fail', (req, res) => {
    res.send("login failed")
})

userRoute.get('/logout', (req, res) => {
    req.session.destroy()
    console.log('user is logout')
    res.send("Logouted")
})


module.exports = userRoute