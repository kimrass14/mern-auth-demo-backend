require("dotenv").config()
const {SECRET} = process.env
const jwt = require("jsonwebtoken")


const auth = async (req, res, next) => {
    try{
    //authorization: Headers "bearer tokenstringfromlogin"
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        const payload = await jwt.verify(token, SECRET)
        if(payload){
            req.payload = payload
            next();
        } else{
            res.status(400).json({error: "verification failed or no payload"})
        }
    } else {
        res.status(400).json({error: "NO auth header"})
    }
    } catch(error) {
        res.status(400).json({error})
    }
}

module.exports = auth

//POST "/login" enter credentials in Body as JSON
//returns token. copy tokennumber.
//GET "/" Headers Key: Authorization Value: bearer tokennumber