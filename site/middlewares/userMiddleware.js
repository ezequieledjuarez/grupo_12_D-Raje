module.exports = (req,res,next) =>{

    if(req.params.categoria == 'user'){
        next()
    }else{
        res.redirect('/')
    }
}
/*
let categoria = req.params.categoria;
(categoria == 'user') ? next() : res.redirect('/')
*/