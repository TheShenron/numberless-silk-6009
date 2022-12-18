const { Router } = require('express')
const featureMeal = Router()


//middlewares
const { check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')

//UserModel DB
const { userModel } = require('../model/User.model')
const { featuredMealModel } = require('../model/FeaturedMeal.model')
const { restaurantFoodMenuModel } = require('../model/RestaurantFoodMenu.model')
const { UserFoodListMenuModel } = require('../model/UserFoodList.model')



//get feature meal..
featureMeal.get('/',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]

        try {

            //get data from token
            const tokenData = check_jwt(token)

            //checking id is present in feature meal Db or not
            const isPresent = await featuredMealModel.findOne({ id: tokenData.id })

            console.log(isPresent)

            if (isPresent === null) {

                //now geting first 1.geting type
                const user = await userModel.findOne({ _id: tokenData.id })

                if (user === null) return res.send({ msg: "Invalide user", status: false })

                console.log(user)

                if (user.userType === "user") {

                    const firstFoodMenu = await UserFoodListMenuModel.findOne({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                } else {

                    const firstFoodMenu = await restaurantFoodMenuModel.findOne({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                }

            }


            //finding the userType
            const user = await userModel.findOne({ _id: tokenData.id })

            if (user === null) return res.send({ msg: "Invalide user", status: false })

            if (user.userType === "user") {

                const firstFoodMenu = await UserFoodListMenuModel.findOne({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            } else {

                const firstFoodMenu = await restaurantFoodMenuModel.findOne({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            }


        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting feature meal", status: false })
        }

    })



//feature meal get by everyone
featureMeal.get('/id/:id', async (req, res) => {

        let id = req.params.id


        try {

            //checking id is present in feature meal Db or not
            const isPresent = await featuredMealModel.findOne({ id: id })

            if(isPresent ===null) return res.send({msg:"Feature Food not set by user/restaurant" , status:false})


            if (isPresent === null) {

                //now geting first 1.geting type
                const user = await userModel.findOne({ _id: tokenData.id })

                if (user === null) return res.send({ msg: "Invalide user", status: false })

                console.log(user)

                if (user.userType === "user") {

                    const firstFoodMenu = await UserFoodListMenuModel.findOne({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                } else {

                    const firstFoodMenu = await restaurantFoodMenuModel.findOne({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                }

            }


            //finding the userType
            const user = await userModel.findOne({ _id: tokenData.id })

            if (user === null) return res.send({ msg: "Invalide user", status: false })

            if (user.userType === "user") {

                const firstFoodMenu = await UserFoodListMenuModel.findOne({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            } else {

                const firstFoodMenu = await restaurantFoodMenuModel.findOne({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            }


        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting feature meal", status: false })
        }

    })









//add feature meal..
featureMeal.put('/update/:id',
    tokenInHeader,
    async (req, res) => {

        const token = req.headers['authorization'].split(" ")[1]
        const id = req.params.id

        try {

            //geting data from token
            const tokenData = check_jwt(token)

            //checking document is there of not
            const isDoc = await featuredMealModel.findOne({})

            if(isDoc === null){

                const addNew = new featuredMealModel({
                    id:tokenData.id,
                    foodMenuID:id
                })

                await addNew.save()

                return res.send({msg:"Feature Meal Added" , status:true})

            }

            //adding id into DB
            await featuredMealModel.findOneAndUpdate({} ,{
                id:tokenData.id,
                foodMenuID:id
            })

            res.send({msg:"Feature Meal updated" , status:true})


        } catch (error) {
            console.log(error)
            res.send({msg:"error while updating feature mean" , status:false})
        }

    })



module.exports = { featureMeal }