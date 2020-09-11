const axios = require('axios');

module.exports = {

        async getProducts(req, res){

        await axios.get('http://localhost:8080/products').then((products) => {
            var productList = products.data.products;
            res.render('Products.ejs', { productList });
         }).catch((err) => {
             console.log(err);
         })

    }

}