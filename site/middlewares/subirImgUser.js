const path = require('path')
const multer = require('multer')

let storage = multer.diskStorage({
    destination:(req,files,callback)=>{
        callback(null, 'public/images/usuarios')
    },
    filename: (req,file,callback)=>{
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

module.exports = multer({storage: storage})