const Clients = require('../models/Clients');

module.exports = {

    async getClients(req, res){

        await Clients.findAll().then((clients) => {
            res.json(clients);
            
        }).catch((err) => {
            console.log(err);
        })
    },

    async createClient(req, res){

        const { fullName, email, cpf, companyId } = req.body;

        Clients.create({

            fullName: fullName,
            email: email,
            cpf: cpf,
            companyId: companyId

        }).then(() => {
            res.json({result: `The client ${fullName} was saved successfully`});
        }).catch((err) => {
            console.log(err)
        });

    },

    async updateClient(req, res){
        const { fullName, cpf, email, companyId } = req.body;
        console.log(cpf);
        Clients.findOne({ 
            where: {
                cpf: cpf
            }
        }).then((client) => {

        if(client != undefined && client != null){

            Clients.update({
                fullName: fullName,
                cpf: cpf,
                email: email,
                companyId: companyId
            }, {
                where: {
                    cpf: cpf
                }
            }).then(() => {
                res.json({result: 'The client with the cpf ' + cpf + ' was successfully updated'});
            }).catch((err) => {
                console.log(err);
                res.status(400);
            })

        } else {
            res.json({result: 'Client not found, please try with another cpf'});
            res.status(404);
        }


    }).catch((err) => {
        console.log(err);
    })

    },

    async deleteClient(req, res){
        const { cpf } = req.params;

        await Clients.destroy({
            where: {
                cpf: cpf
            }
        }).then(() => {
            res.json({result: 'Client deleted successfully'});
            res.status(200);
        }).catch((err) => {
            console.log(err);
            res.status(400);
        })
    }

}
