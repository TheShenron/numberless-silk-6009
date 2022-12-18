 const mongoose = require('mongoose')

 mongoose.set('strictQuery', true);
 const connect = mongoose.connect(process.env.MONGO_URL)

 module.exports = { connect }