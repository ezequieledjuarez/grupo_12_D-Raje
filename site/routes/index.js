var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainController.home);

/*GET preguntas frecuentes*/
router.get('/faq', mainController.faq) 
module.exports = router;