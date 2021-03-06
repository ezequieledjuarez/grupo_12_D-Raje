var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const subirImg = require('../middlewares/subirImgUser')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const isLogged = require('../middlewares/loggedMiddleware')
const isVisitor = require('../middlewares/visitorMiddleware')
const isUser = require('../middlewares/userMiddleware')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/*Carrito de compra*/
router.get('/shop', isUser, usersControllers.carrito)

/*Login*/ 
router.get('/login',isVisitor, usersControllers.login)
router.post('/login',loginValidator, usersControllers.loginSend)
/*Registro*/
router.get('/register', isVisitor, usersControllers.registro)
router.post('/register',subirImg.any(),registerValidator,usersControllers.agregarUsuario)

/*Logout*/

router.get('/logout', usersControllers.logout)

/*Perfil de usuario*/
router.get('/profile', isUser, usersControllers.profile) 

//Actualizar datos del usuario
router.put('/update/:id', isUser,subirImg.any(), usersControllers.updateUser)

//Dar de baja al usuario
router.delete('/delete/:id',isUser,usersControllers.deleteUser)

module.exports = router;