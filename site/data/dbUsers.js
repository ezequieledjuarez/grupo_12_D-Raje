const fs = require('fs')
const path = require('path')

module.export = JSON.parse(fs.readFileSync(path.join(__dirname,'./idUsuarios.json'),'utf-8'))