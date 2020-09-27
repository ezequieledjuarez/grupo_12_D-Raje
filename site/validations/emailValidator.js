const dbUsers = require('../data/dbUsers');

const{check,body} = require('express-validator')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Email inválido'),

    body('email')
    .custom((value)=>{
        let user = dbUsers.filter(user=>{
            return user.email == value
        })
        if(usuario == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('El mail ingresado no está registrado')
]