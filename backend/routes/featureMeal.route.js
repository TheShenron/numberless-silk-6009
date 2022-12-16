const { Router } = require('express')
const featureMeal = Router()


//middlewares
const { hashpassword, compareHash } = require('../middleware/Hashing')
const { create_jwt, check_jwt } = require('../middleware/JwtToken')
const { tokenInHeader } = require('../middleware/CheckToken')

//UserModel DB
const { userModel } = require('../model/User.model')
const { userDetailModel } = require('../model/UserDetails.model')
const { restaurantDetailModel } = require('../model/RestaurantDetail.model')
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

            if (isPresent === null) {

                //now geting first 1.geting type
                const user = await userModel.findOne({ _id: tokenData.id })

                if (user === null) return res.send({ msg: "Invalide user", status: false })

                if (user.userType === "user") {

                    const firstFoodMenu = await UserFoodListMenuModel.find({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                } else {

                    const firstFoodMenu = await restaurantFoodMenuModel.find({}).limit(1)

                    if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                    return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


                }

            }


            //finding the userType
            const user = await userModel.findOne({ _id: tokenData.id })

            if (user === null) return res.send({ msg: "Invalide user", status: false })

            if (user.userType === "user") {

                const firstFoodMenu = await UserFoodListMenuModel.find({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            } else {

                const firstFoodMenu = await restaurantFoodMenuModel.find({ _id: isPresent.foodMenuID })

                if (firstFoodMenu === null) return res.send({ msg: "User have not added any food menu", status: true })

                return res.send({ msg: "default feature food", data: firstFoodMenu, status: true })


            }


        } catch (error) {
            console.log(error)
            res.send({ msg: "error while geting feature meal", status: false })
        }

    })


//add feature meal..
featureMeal.post('/update',
    tokenInHeader,
    async (req, res) => {

    })



module.exports = { featureMeal }