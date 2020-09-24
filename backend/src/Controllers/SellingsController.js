const Sellings = require('../models/Sellings');

module.exports = {

    async getAll(req, res){
        const { companyId } = req.params;

        await Sellings.findAll({ where: { companyId: companyId }}).then(sellings => {
            res.json(sellings);
        }).catch((err) => {
            console.log(err);
        })
    },

    async saveSelling(req, res){
        const { companyId } = req.params;
        const { itens, discount, totalValue, clientCpf } = req.body;

        await Sellings.create({
            itens: itens,
            discount: discount,
            totalValue: totalValue,
            companyId: companyId,
            clientCpf: clientCpf
        }).then(() => {
            res.json({ result: "Selling saved successfully"});
        }).catch((err) => {
            console.log(err);
        })
    }

}