const sequelize = require('sequelize');
const Companies = require('../models/Companies');

module.exports = {

    async registerCompany(req, res){
        const { companyName, cnpj, category } = req.body;

        await Companies.create({
            companyName: companyName,
            cnpj: cnpj,
            category: category
        }).then(() => {
            res.json({result: "New company saved successfully"});
        }).catch((err) => {
            console.log(err);
        })
    },

    async getCompanies(req, res){
        await Companies.findAll().then((companies) => {
            res.json(companies);
        }).catch((err) => {
            console.log(err);
        })
    }

} 