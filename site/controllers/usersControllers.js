const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const dbUsers = require(path.join(__dirname, '..', 'data', 'dbUsers'))
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
            dbUsers.forEach(user=>{
                if(user.email == req.body.email){
                    req.session.user = {
                        id: user.id,
                        email: user.email
                    }
                }
            })
            res.redirect('/')
    },
    agregarUsuario:function(req,res){
        let ultimoId = 1
        dbUsers.forEach(usuario=>{
            if(usuario.id > ultimoId){
                ultimoId = usuario.id
            }    
        })
        let nuevoUsuario = {
            id : ultimoId + 1,
            nombre : req.body.nombre.trim(),
            apellido: req.body.apellido.trim(),
            correo: req.body.correo.trim(),
            categoria:'user',
            password:bcrypt.hashSync(req.body.password,10),
            image:(req.files[0])?req.files[0].filename:"imgDeffault.jpg",
        }
        dbUsers.push(nuevoUsuario)

        let usuarioJson = JSON.stringify(dbUsers)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'),usuarioJson)
        res.redirect('/')
    },
}