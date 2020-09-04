const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));

module.exports = {
    home: function(req, res) {
        res.render('home', {
            title: 'D-Raje',
            css: 'home.css'
        })
    }
}