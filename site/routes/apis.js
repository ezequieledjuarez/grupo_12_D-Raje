let express = require('express')
let router = express.Router()
let apiController = require('../controllers/apiController')

router.post('/mails', apiController.mails)

module.exports = router