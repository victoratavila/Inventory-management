const axios = require('axios');

module.exports = {

    async login(req, res){
        await res.render('Login.ejs')
    }



}