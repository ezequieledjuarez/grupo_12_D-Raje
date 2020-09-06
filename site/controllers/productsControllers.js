const fs = require('fs')
const path = require('path')
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))

module.exports = {
    detalleProducto: function(req, res) {
        idProducto = req.params.id
        let producto = dbProducts.filter(producto => {
            return producto.id == idProducto
        })
        res.render('detalleProducto', {
            title: 'Producto detallado',
            css: 'detalleProducto.css',
            producto: producto[0]
        })
    },

    cargaProducto: function(req, res) {
        res.render('cargaDeProducto', {
            title: 'Carga de producto',
            css: 'cargaProductos.css',
        })
    }
}