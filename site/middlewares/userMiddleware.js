module.exports = (req,res,next) =>{
        if(req.session.user.categoria == 'user'){
            next()
    }else {
        res.redirect('/')
    }
}
/*
let categoria = req.session.user.categoria;
(categoria == 'user') ? next() : res.redirect('/')
*/