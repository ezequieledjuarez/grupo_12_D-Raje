module.exports = (req,res,next) =>{
    if(req.cookies.userDRaje){
        req.session.user = req.cookies.userDRaje
        res.locals.user = req.session.user
        next()
    }
    else{
        next()
    }
}