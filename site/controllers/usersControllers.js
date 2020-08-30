const fs = require('fs')
const path = require('path')
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))

module.exports = {
    carrito: function(req, res) {
        res.render('carrito', {
            title: 'Mi compra'
        })
    }
}