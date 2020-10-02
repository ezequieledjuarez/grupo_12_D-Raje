module.exports = (req,res,next) =>{
    if(req.params.categoria == 'admin'){
        next()
    }else{
        res.redirect('/')
    }
}