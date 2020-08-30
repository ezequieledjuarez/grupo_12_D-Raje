const fs = require('fs')
const path = require('path')
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))

module.exports = {
    detalleProducto: function(req, res) {
        res.render('detalleProducto', {
            title: 'Producto detallado'
        })
    }
}