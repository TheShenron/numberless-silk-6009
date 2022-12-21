const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

//DotEnv import
require('dotenv').config()

//MongoDB connect
const { connect } = require('./config/db')

//routes. imports
const { login } = require("./routes/login.route")
const { signup } = require('./routes/signup.route')
const { menu } = require('./routes/menu.route')
const { moment } = require('./routes/moment.route')
const { recipe } = require('./routes/recipe.route')
const { deal } = require('./routes/deal.route')



//app use
app.use(express.json())

//for google oauth
const session = require('express-session')
app.use(session({secret:process.env.SECRATE_KEY , resave:false , saveUninitialized:true}))




//routes
app.use('/login' , login)
app.use('/signup' , signup)
app.use('/moment' , moment)
app.use('/recipe' , recipe)
app.use('/menu' , menu)
app.use('/deal' , deal )


app.get('/' , (req,res)=>{
    res.send({msg:"welcome to KindMeal API " , status:true})
})

app.listen(PORT , async ()=>{

    console.log("App is Running at " + PORT)
    await connect
    console.log("Connected to MongoDB")

})
