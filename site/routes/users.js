var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const subirImg = require('../middlewares/subirImgUser')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', usersControllers.carrito)

/*Login*/ 
router.get('/login', usersControllers.login)
router.post('/login', loginValidator, usersControllers.loginSend)
/*Registro*/
router.get('/register', usersControllers.registro)
router.post('/register', subirImg.any(),registerValidator,usersControllers.agregarUsuario)

/*Logout*/

router.get('/logout', usersControllers.logout)

module.exports = router;