const axios = require('axios');


module.exports = {
    async getData(req, res){
        axios.get('http://localhost:8080/products').then((products) => {

            var totalPrice = products.data.extraData[0];
            var registeredProducts = products.data.extraData[1];
            var availableProducts = products.data.extraData[2];
    
            res.render('Dashboard.ejs', { totalPrice, registeredProducts, availableProducts });
    
        }).catch((err) => {
            console.log(err)
        })
    }
}