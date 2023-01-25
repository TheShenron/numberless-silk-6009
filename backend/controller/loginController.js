//passport
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')

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
    function (accToken, refToken , profile, done) {
        //check and create user hear itself 
        done(null, profile)
    }
))
