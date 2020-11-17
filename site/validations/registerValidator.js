const {check, validationResult, body} = require('express-validator')
const path = require('path')
const db =  require('../db/models')
module.exports = [
    check('nombre')
    .isLength({
        min: 3,
        max: 12
    })
    .withMessage('El nombre ingresado debe ser mayor a 3 y menor a 16 caracteres.'),

    check('apellido')
    .isLength({
        min: 1
    })
    .withMessage('Este campo no puede quedar vacío.'),
    
    check('correo')
    .isEmail()
    .withMessage('Debe ingresar un mail válido.'),

    body('correo')
    .custom(function(value){
        return db.Users.findOne({
            where:{
                correo: value
            }
        })
        .then(user =>{
            if(user){
                return Promise.reject('El correo ingresado ya fue registrado')
            }
        })
    })
    .withMessage('El mail ingresado ya fue registrado.'),

    check('password')
    .isLength({
        min: 8,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 8 y 12 caracteres'),

    body('password2')
    .custom((value,{req}) =>{
        if(value != req.body.password){
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden.'),
    
    body('imagen')
    .custom((value, {req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage('Debes subir una imagen'),

    body('imagen')
    .custom((value, {req})=>{
   
        value = req.files[0].filename
        let extension = path.extname(value)
        
        return extension == '.jpg' || extension == '.jpeg' || extension == '.png' || extension == '.gif'
    })
    .withMessage('Debes subir una imagen con formato jpg, jpeg, png o gif'),
    
    check('byc')
    .isString("on")
    .withMessage('Debes aceptar las bases y condiciones.')
]