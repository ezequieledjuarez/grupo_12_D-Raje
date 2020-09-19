const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

/*Detalle de producto*/

router.get('/detalle/:id', productsController.detalleProducto)

/*carga de producto*/ 
router.get('/create', productsController.cargaProducto)

/*Vista de un producto con opciones para editar o eliminar*/

router.get('/show/:id', productsController.mostrarProducto)

/*Vista previa del producto a editar*/ 

router.get('/edit/:id', productsController.formProducto)

/*Editar productos*/ 
router.put('/edit/:id', productsController.editarProducto)

/*Eliminar productos*/ 

router.delete('/eliminar/:id', productsControllers.eliminarProducto)

router.get('')
module.exports = router;