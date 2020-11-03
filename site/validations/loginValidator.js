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
    /* check('correo')
    .isEmail()
    .withMessage('Debes ingresar un email valido'),

    body('correo')
    .custom(function(value){
        let user = dbUsers.filter(user=>{
            return user.correo == value
        })
        if(user == false){
            return false 
        }else{
            return true
        }
    })
    .withMessage('El usuario ingresado no existe'),

    check('password')
    .isLength({
        min:1
    })
    .withMessage('Ingresa tu contraseña'),
    
    body('password')
    .custom(function(value, {req}){
        let resultado = true
        dbUsers.forEach(user=>{
            if(user.correo == req.body.correo){
                if(!bcrypt.compareSync(value,user.password)){
                    resultado = false
                }
            }
        })
        if(resultado == false){
            return false
        }
        else{
            return true
        }
    })
    .withMessage('Contraseña incorrecta') */
]

