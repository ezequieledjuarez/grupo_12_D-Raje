const fs = require('fs')
const path = require('path')
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
    agregarUsuario:function(req,res){
        let ultimoId = 1
        usuarios.forEach(id=>{
            if(id.id > ultimoId){
                ultimoId = id.id
            }    
        })
        let nuevoUsuario = {
            id : ultimoId + 1,
            nombre : req.body.nombre.trim(),
            correo: req.body.correo.trim(),
            categoria:req.body.categoria.trim(),
            contraseña:req.body.contraseña.trim(),
            imagen:(req.files[0])?req.files[0].filename:"imgDeffault.jpg",
        }
        usuarios.push(nuevoUsuario)

        let usuarioJson = JSON.stringify(usuarios)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'),usuarioJson)
        res.redirect('/')
    },
}