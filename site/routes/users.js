var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', usersControllers.carrito)

/*Registro*/
router.get('/register', usersControllers.registro)


module.exports = router;