const axios = require('axios');

module.exports = {

    async getAll(req, res){

        const fixedCompanyId = 5;

        await axios.get(`http://localhost:8080/sellings/${fixedCompanyId}`).then((sellings) => {

             axios.get(`http://localhost:8080/clients/${fixedCompanyId}`).then((clients) => {
                const clientData = clients.data;
                console.log(clientData);
                const data = sellings.data;
                res.render('Sellings.ejs', { data, clientData });
            })
            
        })
    },

    async saveSelling(req, res){
        const fixedCompanyId = 5;
        const { itens, totalValue, discount, clientCpf } = req.body;
        console.log(itens, totalValue, discount, clientCpf);
    }

}