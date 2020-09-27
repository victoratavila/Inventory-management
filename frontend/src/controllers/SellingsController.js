const axios = require('axios');

module.exports = {

    async getAll(req, res){

        const fixedCompanyId = 5;

        await axios.get(`http://localhost:8080/sellings/${fixedCompanyId}`).then((sellings) => {
             axios.get(`http://localhost:8080/clients/${fixedCompanyId}`).then((clients) => {
                const clientData = clients.data;
                const data = sellings.data;
                console.log(clientData);
                res.render('Sellings.ejs', { clientData, data });
            })
         
            
        })
    },

    async newSellingView(req, res){

        const fixedCompanyId = 5;
        axios.get(`http://localhost:8080/clients/${fixedCompanyId}`).then((clients) => {

            axios.get(`http://localhost:8080/products/${fixedCompanyId}`).then((products) => {
                const productData = products.data;
                console.log(productData);
                const clientData = clients.data;
                  res.render('newSelling.ejs', { clientData, productData });
        }) });
 
    },

    async saveSelling(req, res){
        const fixedCompanyId = 5;
        const { itens, totalValue, discount, clientCpf } = req.body;
        console.log(itens, totalValue, discount, clientCpf);
    }

}