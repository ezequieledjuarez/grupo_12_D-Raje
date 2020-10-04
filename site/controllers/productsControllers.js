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

    agregarProducto:function(req,res){
        let ultimoId = 1
        dbProducts.forEach(producto=>{
            if(producto.id > ultimoId){
                ultimoId = producto.id
            }    
        })
        let nuevoProducto = {
            id : ultimoId + 1,
            nombre : req.body.nombre.trim(),
            marca: req.body.marca.trim(),
            precio:Number(req.body.precio),
            descuento:Number(req.body.descuento),
            estado:req.body.estado.trim(),
            descripcion:req.body.descripcion.trim(),
            categoria:req.body.categoria.trim(),
            imagen:(req.files[0])?req.files[0].filename:"default-image.jpg",
        }
        dbProducts.push(nuevoProducto)

        let productoJson = JSON.stringify(dbProducts)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'),productoJson)
        res.redirect('/')
    },

    mostrarProducto: function(req,res){
        idProducto = req.params.id
        let producto = dbProducts.filter(producto => {
            return producto.id == idProducto
        })
        res.render('mostrarProducto',{
            title: 'Editar Producto',
            css: 'home.css',
            productos: dbProducts,
            producto: producto[0]

        })
    },

    formProducto: function(req,res){
        let idProducto = req.params.id;

        let prEditar = dbProducts.filter(producto =>{
            return producto.id == idProducto
        });
        res.render('editarProductos',
        {css: 'detalleProducto.css',
        producto : prEditar[0]}
        )
    },
    
    editarProducto: function(req,res){

        dbProducts.forEach(producto=>{
            if(producto.id == req.params.id){
                producto.nombre = req.body.nombre.trim()
                producto.marca = req.body.marca.trim()
                producto.precio = Number(req.body.precio),
                producto.descuento = Number(req.body.descuento),
                producto.estado = req.body.estado,
                producto.descripcion = req.body.descripcion.trim(),
                producto.categoria = req.body.categoria,
                producto.image = producto.image
            }
        });

        let productoJson = JSON.stringify(dbProducts)

        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),productoJson,'utf-8');
        res.redirect('/products/show/'+ req.params.id)

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
    
    },

    listarTodos: function(req,res){
        res.render('Productos',{
            title: 'Productos',
            css: 'home.css',
            productos: dbProducts
        })
    },
    buscar: function(req,res){
        let buscado = req.query.search
        if(buscado == ""){
            res.redirect('/')
        }
        else{
            let encontrados = []
            dbProducts.forEach(producto =>{
            if(producto.name.toLowerCase().includes(buscado.toLowerCase())){
                encontrados.push(producto)
            }
            })
            res.render('products',{
                title: 'Resultados de la búsqueda',
                css: 'productos.css',
                productos : encontrados
            })
        }
    }
}