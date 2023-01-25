const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

//DotEnv import
require('dotenv').config()

//MongoDB connect
const { connect } = require('./config/db')


//app use
app.use(express.json())


//passport
const session = require('express-session')
app.use(session({
    secret:process.env.SECRATE_KEY,
    resave:false,
    saveUninitialized:false
}))


//routes. imports
const userRoute = require('./routes/user.route')


//routes

app.get('/', (req, res) => {
    res.send({ msg: "welcome to KindMeal API ", status: true })
})

app.use('/user' , userRoute)




app.listen(PORT, async () => {

    console.log("App is Running at " + PORT)
    await connect
    console.log("Connected to MongoDB")

})
