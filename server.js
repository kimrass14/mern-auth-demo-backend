//IMPORT DEPENDENCIES
require("dotenv").config()
const {PORT, NODE_ENV} = process.env
const express = require("express")
const app = express()
const mongoose = require("./db/conn")
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = require("./config/cors")
const AuthRouter = require("./controllers/user")

//SETUP MIDDLEWARE
app.use(NODE_ENV === "production" ? cors(corsOptions) : cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.static("public"))

//ROUTES
app.use("/auth", AuthRouter)

// app.get("/auth", (req, res) => {
//     res.send("hello world")
// })

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})