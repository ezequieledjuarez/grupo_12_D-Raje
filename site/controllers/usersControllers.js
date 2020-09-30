const fs = require('fs')
const path = require('path')
const dbUsers = require('../data/dbUsers')
const {validationResult} = require('express-validator');


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
    login: function(req,res){
        res.render('login',{
            title:'Ingreso',
            css: 'login.css'
        })
    },

    loginSend:function(req,res){
        let errores = validationResult(req);
        if(errores.isEmpty()){
            dbUsers.forEach(user=>{
                if(user.email == req.body.email){
                    req.session.user = {
                        id: user.id,
                        email: user.email
                    }
                }
            })
            res.redirect('/')
        }else{
            res.render('login',{
                title: "Ingresar",
                css:"login.css",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
}