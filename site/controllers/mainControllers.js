const path = require('path');
const db = require(path.join(__dirname, '..', 'db', 'models'));
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const nodemailer = require('nodemailer')

module.exports = {
    home: function(req, res) {
        db.Products.findAll()
            .then(productos =>{
                res.render('home', {
                    title: 'D-Raje',
                    css: 'home.css',
                    productos: productos
                })
            })
        },
    faq: function(req,res){
        res.render('faq',{
            title: 'Preguntas Frecuentes',
            css: 'home.css'
        })
    },

    tyc:function(req,res){
        res.render('terminosYcondiciones',{
            title: 'Términos y Condiciones',
            css: 'home.css'
        })
    }
}