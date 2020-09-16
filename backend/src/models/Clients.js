const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Company = require('./Companies');

const Client = connection.define('clients', {

    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },

    companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    
});

Client.belongsTo(Company);

Client.sync({ force: false});

module.exports = Client;