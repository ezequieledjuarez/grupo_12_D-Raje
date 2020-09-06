const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers')

/*Detalle de producto*/

router.get('/detalle/:id', productsController.detalleProducto)

/*carga de producto*/ 
router.get('/load/', productsController.cargaProducto)

router.get('')
module.exports = router;