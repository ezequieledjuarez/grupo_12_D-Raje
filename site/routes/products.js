const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');
const subirImg = require('../middlewares/subirImgProductos')
const isAdmin = require('../middlewares/adminMiddleware')
/*Ruta principal donde se muestran todos los productos*/ 
router.get('/',productsController.listarTodos)
/*Detalle de producto*/
router.get('/detalle/:id', productsController.detalleProducto)

/*vista carga de producto*/ 
router.get('/create', isAdmin, productsController.cargaProducto)

router.get('/search', productsController.buscar)
/*Envio de datos de carga*/

router.post('/create', subirImg.any(), productsController.agregarProducto)
/*Vista de un producto con opciones para editar o eliminar*/

router.get('/show/:id', isAdmin, productsController.mostrarProducto)

/*Vista previa del producto a editar*/ 

router.get('/edit/:id', isAdmin, productsController.formProducto)

/*Editar productos*/ 
router.put('/edit/:id', subirImg.any(), productsController.editarProducto)

/*Eliminar productos*/ 

router.delete('/eliminar/:id', productsController.eliminarProducto)

module.exports = router;