const Clients = require('../models/Clients');

module.exports = {

    async getClients(req, res){

        const { companyId } = req.params;

        await Clients.findAll({ where: { companyId: companyId }}).then((clients) => {
            res.json(clients);
            
        }).catch((err) => {
            console.log(err);
        })
    },

    async createClient(req, res){

        const { fullName, cpf, companyId } = req.body;
        var { email } = req.body;
        var email = email.toLowerCase();

        await Clients.findOne({
            where: {
                cpf: cpf
            }
        }).then((client) => {

            if(client == undefined || client == null){

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

            } else {

                res.status(400);
                res.json({result: "There is a client already registered with the cpf " + cpf + ", please try a new cpf"});
            
            }

        }).catch((err) => {
            console.log(err);
        })

  

    },

    async updateClient(req, res){

        const { fullName, cpf, companyId } = req.body;
        var { email } = req.body;
        var email = email.toLowerCase();
        
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
    },

    async searchByCPF(req, res){

        const { companyId, cpf } = req.params;

        await Clients.findOne({ where: {
            cpf: cpf,
            companyId: companyId
        }}).then((client) => {
            res.status(200);
            res.json(client);
        }).catch((err) => {
            console.log(err);
            res.status(400);
        })
    }

}
