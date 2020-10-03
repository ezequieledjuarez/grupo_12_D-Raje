const {check, validationResult, body} = require('express-validator')

const dbUsers =  require('../data/dbUsers')

module.exprots = [
    check('nombre')
    .isLength({
        min: 3,
        max: 16
    })
    .withMessage('El nombre ingresado debe ser mayor a 3 y menor a 16 caracteres.'),

    check('apellido')
    .isLength({
        min: 1
    })
    .withMessage('Este campo no puede quedar vacío.'),
    
    check('email')
    .isEmail
    .withMessage('Debe ingresar un mail válido.'),

    body('email')
    .custom(function(email){
        for(let i = 0; i<dbUsers.length; i++){
            if(dbUsers[i].email == email){

            }
        }
            return true
    })
    .withMessage('El mail ingresado ya fue registrado.'),

    check('password')
    .isLength({
        min: 8,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 8 y 12 caracteres'),

    body('password2')
    .custom((password2,{req}) =>{
        if(password2 != req.body.password){
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden.'),

    check('byc')
    .isString("on")
    .withMessage('Debes aceptar las bases y condiciones.')
]