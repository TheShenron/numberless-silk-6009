const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth2').Strategy


passport.serializeUser((user , done)=>{
    done(null , user)
})

passport.deserializeUser((user , done)=>{
    done(null , user)
})

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECRATE,
    callbackURL:process.env.CALLBACKURL,
    passReqToCallback:true
}, function(req , token , reftoken , profile , done){
    return done(null , profile)
}
))



