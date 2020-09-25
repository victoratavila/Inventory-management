const axios = require('axios');

module.exports = {

    async getClients(req, res){
        const fixedCompanyId = 5;
        axios.get('http://localhost:8080/clients/'+fixedCompanyId).then((clients) => {

            const data = clients.data;
            const fixedCompanyId = 5;

            if(data == null || data == undefined || data == "" || data == []){
                var empty = true;
            } else {
                var empty = false;
            }

            res.render('Clients.ejs', { data, fixedCompanyId, empty });

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
        }).then((result) => {
    
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
    },

    async updateClient(req, res){
        const { fullName, cpf, email, companyId } = req.body;
        await axios.put('http://localhost:8080/clients', {
            fullName: fullName,
            cpf: cpf,
            email: email,
            companyId: companyId
        }).then(() => {
            res.redirect('/clientes');
        }).catch((err) => {
            console.log(err);
        })
    },

    async searchByCPF(req, res){
        const { cpf } = req.params;

        axios.get(`http://localhost:8080/clients/5/${cpf}`).then((client) => {
            const data = client.data;
            const fixedCompanyId = 5;

            if(data == null || data == undefined || data == "" || data == []){
                var empty = true;
            } else {
                var empty = false;
            }

            axios.get('http://localhost:8080/clients/'+fixedCompanyId).then((response) => {
            var size = response.data;
    
            if(data == null){
                res.render('ClientNotFound', { data, size, fixedCompanyId, cpf, empty });
            } else {
                res.render('ClientFound', { data, size, fixedCompanyId, cpf, empty });
            }

        }).catch((err) => {
            console.log(err);
        })

        }).catch((err) => {
            console.log(err);
        })
    }

} 