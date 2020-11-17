const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');
const db = require(path.join(__dirname, '..', 'db', 'models'))

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
            css: 'registro.css',
            script:'userRegister.js'
        })
    },

     agregarUsuario:function(req,res){
     let errores = validationResult(req)
     
     if(!errores.isEmpty()){
        res.render('registro',{
            title: "Registro de usuario",
            css : 'registro.css',
            errores: errores.mapped(),
            old: req.body
        })
     }
     else{
        db.Users.create({
            nombre : req.body.nombre.trim(),
            apellido: req.body.apellido.trim(),
            correo: req.body.correo.trim(),
            categoria:'user',
            password:bcrypt.hashSync(req.body.password,10),
            image:(req.files[0])?req.files[0].filename:"imgDeffault.jpg",
        })
        .then(user => {
             res.redirect('/users/login')
            })
        .catch(e=> res.send(e))
     }
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
            db.Users.findOne({
                where:{
                    correo:req.body.correo
                }
            })
            .then(user=>{
                    req.session.user = {
                        id: user.id,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        alias:user.nombre + " " + user.apellido,
                        email: user.correo,
                        image: user.image,
                        categoria : user.categoria
                    }
                if(req.body.recordar){
                    res.cookie('userD-Raje',req.session.user, {maxAge:1000*60*10})
                }
                res.redirect('/')
            })
        }else{
            res.render('login',{
                title: 'Ingresa a tu cuenta',
                css: 'login.css',
                errores : errores.mapped(),
                old: req.body
            })
        }
            
    },

    logout: function(req,res){
        req.session.destroy()
        if(req.cookies.userDRaje){
            res.cookie('userDRaje', ' ', {maxAge:-1})
        }
        return res.redirect('/')
    },

    profile: function(req,res){
        db.Users.findByPk(req.session.user.id)
        .then(user=>{res.render('profile',{
            title: 'Perfil',
            css: 'home.css',
            script: 'userDelete.js', 
            user: user
            })
        })
        .catch(e=>{res.send(e)})
    },

    updateUser:function(req,res){
        db.Users.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            image:(req.files[0])?req.files[0].filename:req.session.user.image,
        },

        {
            where:{
                id:req.params.id
            }
        })
        .then(()=>{
            req.session.user.nombre = req.body.nombre
            req.session.user.apellido = req.body.apellido
            req.session.user.alias = req.body.nombre +' '+ req.body.apellido
            res.redirect('/')
        })

        .catch(e=>{res.send(e)})
    },

    deleteUser: function(req,res){
        db.Users.destroy({
            where: {
                id:req.params.id
            }
        })
        .then(result=>{
            
            fs.unlinkSync('./public/images/usuarios/'+ req.session.user.image); 
            req.session.destroy()
            if(req.cookies.userDRaje){
                res.cookie('userD-Raje', '', {maxAge:-1})
            } 
            return res.redirect('/')
        })
        .catch(error=>{
            res.send(error)
        })
    }
}