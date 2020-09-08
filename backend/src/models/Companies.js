const { Sequelize } = require('sequelize');
const connection = require('../database/connection');

const Company = connection.define('company', {

    companyName: {

        type: Sequelize.STRING,
        allowNull: false

    },

    cnpj: {
        
        type: Sequelize.STRING,
        allowNull: false

    }, 

    category: {
        
        type: Sequelize.STRING,
        allowNull: false
        
    }


});

Company.sync({force: false}).then(() => {
    console.log('Table created/reloaded');
}).catch((err) => {
    console.log(err);
});

module.exports = Company;