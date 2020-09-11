const axios = require('axios');

module.exports = {

        async getProducts(req, res){

        await axios.get('http://localhost:8080/products').then((products) => {
            var productList = products.data.products;
            var fixedCompanyId = 5;
            res.render('Products.ejs', { productList, fixedCompanyId });
         }).catch((err) => {
             console.log(err);
         })

    },

    async createProduct(req, res){

        const { name, description, category, price, amount, weight, companyId } = req.body

        await axios.post('http://localhost:8080/create', {
            name: name,
            description: description,
            category: category,
            price: price,
            amount: amount,
            weight: weight, 
            companyId: companyId
        }).then(() => {
            res.redirect('http://localhost:3000/produtos');
        }).catch((err) => {
            console.log(err);
        })
    }

}