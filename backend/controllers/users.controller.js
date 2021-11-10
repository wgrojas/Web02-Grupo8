const usuarios = require('../models/users.model')
const crypto = require ('crypto')
const jwt = require('jsonwebtoken')
const { update } = require('./empleados.controller')
const { response } = require('../app')

exports.login= function(req,res,next){
    let hashedpass = crypto.createHash('sha512').update(req.body.pass).digest('hex');

    usuarios.findOne({
        usuario: req.body.usuario,
        pass: hashedpass
    },function(err, usuario){
        let response = {
            token: null
        
    }
    if(usuario !==null){
        response.token = jwt.sign({
            id:usuario._id,
            usuario: usuario.usuario
        }, '__secret__')
    }
    res.json(response)
    })

}