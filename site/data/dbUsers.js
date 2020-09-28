const fs = require('fs')
const path = require('path')

module.export = JSON.parse(fs.readFileSync(path.join(__dirname,'./usuarios.json'),'utf-8'))