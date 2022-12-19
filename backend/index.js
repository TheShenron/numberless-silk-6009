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
const { featureMeal } = require('./routes/featureMeal.route')
const { restMenu } = require('./routes/restFoodMenu.route')
const { userfood } = require('./routes/userFoodList.route')
const { userRecipe } = require('./routes/userFoodRecipe.route')
const { foodmenu } = require('./routes/getRestFoodMenu.routes')
const { restaurant } = require('./routes/getRestaurant.route')
const { user } = require('./routes/getUser.route')
const { moments } = require('./routes/getUserFoodList.route')
const { recipe } = require('./routes/getUserRecipe.route')

//comment system
const { Rcomment } = require('./routes/Rcomment.route')


//app use
app.use(express.json())

//for google oauth
const session = require('express-session')
app.use(session({secret:process.env.SECRATE_KEY , resave:false , saveUninitialized:true}))




//routes
app.use('/login' , login)
app.use('/signup' , signup)
app.use('/featureMeal' , featureMeal)
app.use('/restMenu' , restMenu)
app.use('/userfood' , userfood)
app.use('/userRecipe' , userRecipe)

//comment
app.use('/rcomment' , Rcomment)

//get routes
app.use('/restaurant' , restaurant)
app.use('/foodmenu' , foodmenu)
app.use('/user' , user)
app.use('/moments' , moments)
app.use('/recipe' , recipe)


app.get('/' , (req,res)=>{
    res.send({msg:"welcome to KindMeal API " , status:true})
})

app.listen(PORT , async ()=>{

    console.log("App is Running at " + PORT)
    await connect
    console.log("Connected to MongoDB")

})