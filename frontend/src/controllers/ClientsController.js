const axios = require('axios');

module.exports = {

    async getClients(req, res){

        axios.get('http://localhost:8080/clients').then((clients) => {

            const data = clients.data;
            const fixedCompanyId = 5;
            res.render('Clients.ejs', { data, fixedCompanyId })

        }).catch((err) => {
            console.log(err);
        })

    },

    async createClient(req, res){

        const { fullName, email, cpf, companyId } = req.body;

        axios.post('http://localhost:8080/clients', {
            fullName: fullName,
            email: email,
            cpf: parseInt(cpf),
            companyId: companyId
        }).then(() => {
            res.redirect('/clientes');
        }).catch((err) => {
            console.log(err);
        })
    },

    async deleteClient(req, res){
        const { cpf } = req.params;

        axios.delete('http://localhost:8080/clients/' + cpf).then(() => {
            res.status(200);
            res.redirect('/clientes');
        }).catch((err) => {
            res.status(400);
            console.log(err);
        })
    }

}