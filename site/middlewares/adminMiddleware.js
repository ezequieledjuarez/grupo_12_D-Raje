module.exports = (req,res,next) =>{
    if(req.session.user.categoria == 'admin'){
        next()
    }else{
        res.redirect('/')
    }
}