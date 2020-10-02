module.exports = (req,res,next) =>{
    if(req.params.categoria == 'user'){
        next()
    }else{
        res.redirect('/')
    }
}