const fs = require('fs')
const path = require('path')
const db = require(path.join(__dirname, '..', 'db', 'models'))
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {

    detalleProducto: function(req, res) {
        db.Products.findByPk(req.params.id)
        .then(producto=>{
        res.render('detalleProducto', {
            title: 'Producto detallado',
            css: 'detalleProducto.css',
            producto: producto
        })
    })
    },

    cargaProducto: function(req, res) {
        res.render('cargaDeProducto', {
            title: 'Carga de producto',
            css: 'cargaProductos.css',
        })
    },

    agregarProducto:function(req,res){

        db.Products.create({
            nombre: req.body.nombre.trim(),
            marca: req.body.marca.trim(),
            precio:Number(req.body.precio),
            descuento:Number(req.body.descuento),
            descripcion:req.body.descripcion.trim(),
            image:(req.files[0])?req.files[0].filename:"default-image.jpg",
            estado:req.body.estado.trim(),
            categoria:req.body.categoria.trim(),
        })
        .then(product =>{
            res.redirect('/')
        })
        .catch(e =>{
            res.send(e)
        })
    },

    mostrarProducto: function(req,res){
       db.Products.findByPk(req.params.id)
        .then(producto =>{
            res.render('mostrarProducto',{
                title: 'Editar Producto',
                css: 'home.css',
                producto: producto
    
            })
        })
        .catch(e=>{
            res.send(e)
        })
    },

    formProducto: function(req,res){
        db.Products.findByPk(req.params.id)
        .then(producto =>{
            res.render('editarProductos',{
            title: 'Editar Producto',
            css: 'detalleProducto.css',
            producto: producto
            }
        )
        })
        .catch(e=>{
            res.send(e)
        })
        
    },
    
    editarProducto: function(req,res){

            db.Products.update({
            nombre: req.body.nombre.trim(),
            marca: req.body.marca.trim(),
            precio:Number(req.body.precio),
            descuento:Number(req.body.descuento),
            descripcion:req.body.descripcion.trim(),
            image:(req.files[0])?req.files[0].filename:req.body.image,
            estado:req.body.estado,
            categoria:req.body.categoria,
            },
            {
            where:{
                id:req.params.id
            }
        })
        .then(product=>{
            console.log(product)
            res.redirect('/')
        })
        .catch(e=>{
            res.send(e)
        })
    },
    eliminarProducto: (req,res) =>{
        
         db.Products.destroy({
             where:{
                 id: req.params.id
             }
         })
         .then(product =>{
             res.redirect('/')
         })
         .catch(e => res.send(e))
    },

    listarTodos: function(req,res){

    db.Products.findAll()
    .then(result =>{
        res.render('productos',{
            title:'Resultado de la busqueda',
            css:'productos.css',
            productos: result,
        })
    })
    .catch(e => {
        res.send(e)
    })

    },
    
    buscar: function(req,res){
        let buscado = req.query.search
        if(buscado == ""){
            res.redirect('/')
        }
        db.Products.findAll({
            where:{
                [Op.or]: [
                { nombre :{[Op.substring] : buscado }},
                { marca :{[Op.substring] : buscado }},  
                { categoria : {[Op.substring] : buscado }},
                { precio:{[Op.lte] : buscado }},
                { estado : {[Op.substring] : buscado }}
                ]
            }
        })
        .then(result =>{
            res.render('productos',{
                title:'Resultado de la busqueda',
                css:'home.css',
                productos: result,
            })
        })
    .catch(e => {
        res.send(e)
    })
    }
}