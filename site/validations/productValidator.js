const {check, validationResult, body} = require('express-validator')

const db = require('../db/models')

module.exports = [
    check('marca')
    .isLength({
        min: 3
    })
    .withMessage('El nombre de la marca no debe tener menos de 3 carácteres'),

    check('descripcion')
    .isLength({
        min: 20
    })
    .withMessage('La descripción no debe tener menos de 20 carácteres'),

    check('nombre')
    .isLength({
        min: 4
    })
    .withMessage('El nombre no debe tener menos de 4 carácteres'),

    check('precio')
    .isFloat({
        gt: 0
    })
    .withMessage('El precio debe ser mayor a 0'),

    check('descuento')
    .isInt({
        gt: -1
    })
    .withMessage('El descuento debe ser 0 en caso de que no haya o superior a 0 en caso de que haya'),

    body('imagen')
    .custom((value, {req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage('Debes subir una imagen')
]   