var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const subirImg = require('../middlewares/subirImgUser')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const isLogged = require('../middlewares/userMiddleware')
const isVisitor = require('../middlewares/visitorMiddleware')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', isLogged, usersControllers.carrito)

/*Login*/ 
router.get('/login',isVisitor, usersControllers.login)
router.post('/login',loginValidator, usersControllers.loginSend)
/*Registro*/
router.get('/register', isVisitor, usersControllers.registro)
router.post('/register', subirImg.any(),registerValidator,usersControllers.agregarUsuario)

/*Logout*/

router.get('/logout', isLogged, usersControllers.logout)

module.exports = router;