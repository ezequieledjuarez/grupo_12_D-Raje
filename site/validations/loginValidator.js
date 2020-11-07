const {check, body} = require('express-validator')
const bcrypt = require('bcrypt')
const db = require('../db/models')
module.exports = [

    check('correo')
    .isEmail()
    .withMessage('Ingrese su correo'),

    check('password')
    .isLength({
        min: 1
    })
    .withMessage('Ingresa tu contraseña'),

    body('password')
    .custom(function(value, {req}){
        return db.Users.findOne({
            where: {
                correo: req.body.correo
            }
        })
        .then(user =>{
            if(!bcrypt.compareSync(value, user.password)){
                return Promise.reject('Datos incorrectos')
            }
        })
        .catch(e=>{
            return Promise.reject('Datos incorrectos')
        })
    })
]
