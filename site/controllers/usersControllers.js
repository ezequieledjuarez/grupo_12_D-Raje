const fs = require('fs')
const path = require('path')

module.exports = {
    carrito: function(req, res) {
        res.render('carrito', {
            title: 'Mi compra',
            css: 'carrito.css'
        })
    },
    registro: function(req, res) {
        res.render('registro', {
            title: 'Registro',
            css: 'registro.css'
        })
    },
}