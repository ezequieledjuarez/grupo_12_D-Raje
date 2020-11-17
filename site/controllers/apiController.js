const db = require('../db/models')

module.exports = {
    mails : (req,res)=>{
        db.Users.findAll({
            attributes: [
                'correo'
            ]
        })
        .then(correos=>res.json(correos))
        .catch(e => res.send(e))
    }
}