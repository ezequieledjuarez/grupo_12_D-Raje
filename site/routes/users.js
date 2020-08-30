var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const usersControllers = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', usersControllers.carrito)

module.exports = router;