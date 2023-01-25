const asyncHandler = require('express-async-handler')
const { userModel } = require('../model/user.model')
const getToken = require('../config/genToken')

const googleLogin = asyncHandler(async (req, res, next) => {

    console.log("from googlelogin middleware...")

    try {

        let { id, displayName, emails, photos } = req.user

        const isPresent = await userModel.findOne({ email: emails[0].value })

        if (isPresent) {

            res.send({
                status: "ok",
                token: getToken(isPresent._id),
                user: {
                    email: isPresent.email,
                    avatar: isPresent.avatar,
                    username: isPresent.username
                },
                loginby:"google"
            })

        } else {

            const AddUser = await userModel.create({
                googleid:id,
                email: emails[0].value,
                avatar: photos[0].value,
                username: displayName
            })

            if (AddUser) {
                res.send({
                    user: {
                        email: AddUser.email,
                        avatar: AddUser.avatar,
                        username: AddUser.username
                    },
                    status: "ok",
                    token: getToken(AddUser._id)
                })
            } else {
                res.status(400)
                throw new Error('Fail to Create User')
            }


        }

    } catch (error) {
        throw new Error(error)
    }

})

module.exports = { googleLogin }
