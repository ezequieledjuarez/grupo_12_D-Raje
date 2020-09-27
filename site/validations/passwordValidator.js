const dbUsers = require('../data/dbUsers');

const{check,body} = require('express-validator')
const bcrypt = require('bcrypt')

module.exports = [
    check('password')
    .isLength({
        min: 8
    })
    .withMessage('Ingresa tu contraseña'),
    
    body('password')
    .custom((value,{req})=>{
        let result = true
        dbUsers.filter(user=>{
            if(user.email == req.body.email){
                if(!bcrypt.compareSync(value,user.contraseña)){
                    result = false
                }
            }
        })
        if(result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('La contraseña ingresada no es correcta')
]