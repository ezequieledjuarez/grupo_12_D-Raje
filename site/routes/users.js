var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const subirImg = require('../middlewares/subirImgUser')
const registerValidator = require('../validations/registerValidator')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', usersControllers.carrito)

/*Login*/ 
router.get('/login', usersControllers.login)
router.post('/login', usersControllers.loginSend)
/*Registro*/
router.get('/register', usersControllers.registro)
router.post('/register', subirImg.any(),registerValidator,usersControllers.agregarUsuario)


module.exports = router;