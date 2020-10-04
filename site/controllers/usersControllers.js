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
        let errores = validationResult(req)
        if(errores.isEmpty()){
            dbUsers.forEach(user=>{
                if(user.correo == req.body.correo){
                    req.session.user = {
                        id: user.id,
                        alias: user.nombre + " " + user.apellido,
                        email: user.correo,
                        image: user.image
                    }
                }
            })
            if(req.body.recordar){
                res.cookie('userD-Raje',req.session.user, {maxAge:1000*60*10})
            }
            res.redirect('/')
            console.log(req.session.user)
        }else{
            res.render('login',{
                title: 'Ingresa a tu cuenta',
                css: 'login.css',
                errores : errores.mapped(),
                old: req.body
            })
        }
            
    },
    agregarUsuario:function(req,res){
        let errores = validationResult(req)
        let ultimoId = 1
        dbUsers.forEach(usuario=>{
            if(usuario.id > ultimoId){
                ultimoId = usuario.id
            }    
        })
        if(!errores.isEmpty()){
            
            res.render('registro',{
                title: "Registro de usuario",
                css : 'registro.css',
                errores: errores.mapped(),
                old: req.body
            })
        }
        else{
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
        }
    },

    logout: function(req,res){
        req.session.destroy()
        if(req.cookies.userDRaje){
            res.cookie('userDRaje', ' ', {maxAge:-1})
        }
        return res.redirect('/')
    }
}