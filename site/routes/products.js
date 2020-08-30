const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers')


router.get('/detalle/:id', productsController.detalleProducto)

module.exports = router;