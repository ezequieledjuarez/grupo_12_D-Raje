module.exports = (req,res,next) =>{
        if(typeof user != 'undefined'){
            next()
    }else {
        res.redirect('/')
    }
}
/*
let categoria = req.session.user.categoria;
(categoria == 'user') ? next() : res.redirect('/')
*/