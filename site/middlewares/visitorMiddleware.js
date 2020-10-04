module.exports = (req,res,next) => {
    if (typeof user == 'undefined' ){
        next()
    }
    else{
       res.redirect('/')
    }
}