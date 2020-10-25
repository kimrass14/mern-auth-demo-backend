
require("dotenv").config()
const {MONGODBURI} = process.env
const mongoose = require("mongoose")
const config = {useNewUrlParser: true, useUnifiedTopology: true}

//CONNECT TO MONGO
mongoose.connect(MONGODBURI, config)

//EVENTS
mongoose.connection
.on("open", () => console.log("You are connected"))
.on("close", () => console.log("You are disconnected"))
.on("error", (error) => console.log(error))

module.exports = mongoose