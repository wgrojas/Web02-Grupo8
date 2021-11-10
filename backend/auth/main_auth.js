const jwt = require("jsonwebtoken")
const { request } = require("../app")
const auth = (req,res,next) =>{
    try {
        const token = req.headers.autorization.split("")[1]
        const decoded = jwt.verify(token,"__secret__")
        req.usuario = decoded
        next()
        
    } catch (error) {
        res.status(401)   
        res.json({code: 4, msj: "No tiene permisos para acceder"})
    }
}
module.exports = auth

