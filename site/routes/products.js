const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');
const productsControllers = require('../controllers/productsControllers');

/*Detalle de producto*/

router.get('/detalle/:id', productsController.detalleProducto)

/*carga de producto*/ 
router.get('/create', productsController.cargaProducto)

/*Vista previa de edit*/

router.get('/:id/edit', productsControllers.mostrarProducto)

/*Editar productos*/ 

router.put('/:id/edit', productsController.editarProducto)


router.get('')
module.exports = router;