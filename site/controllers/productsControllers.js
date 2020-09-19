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
    },

    mostrarProducto: function(req,res){
        idProducto = req.params.id
        let producto = dbProducts.filter(producto => {
            return producto.id == idProducto
        })
        res.render('mostrarProducto',{
            title: 'Editar Producto',
            css: 'home.css',
            producto: producto[0]

        })
    },

    formProducto: function(req,res){
        let prEditar;
        
        dbProducts.forEach(producto=>{
            if(producto.id = req.params.id){
                prEditar = producto
            };
            res.render('editarProductos',
            {css: 'detalleProducto.css',
            producto : prEditar}
            )
        })
    },
    editarProducto: function(req,res){
        res.render('editarProductos',{
            title: 'Editar Producto',
            css: 'detalleProducto.css'
        })

        dbProducts.forEach(producto=>{
            if(producto.id == req.params.id){
                producto.id = Number(req.body.id),
                producto.nombre = req.body.nombre.trim()
                producto.precio = Number(req.body.precio),
                producto.descuento = Number(req.body.descuento),
                producto.estado = req.body.estado.trim(),
                producto.descripcion = req.body.descripcion.trim(),
                producto.image = producto.image
            }
        })
    },
    eliminarProducto: (req,res) =>{
        let indiceDelProducto;
    
        dbProducts.forEach(producto => {
            if(producto.id == req.params.id)
            indiceDelProducto = dbProducts.indexOf(producto)
        })
    
        dbProducts.splice( indiceDelProducto , 1);
        let productoJson =JSON.stringify(dbProducts);
    
        fs.writeFileSync(path.join(__dirname, '..' , 'data' , 'productos.json'), productoJson)
    
        res.redirect('/')
    
    }
}