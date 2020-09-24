const { Sequelize } = require('sequelize');
const connection = require('../database/connection');
const Companies = require('../models/Companies');
const Clients = require('../models/Clients');

const Selling = connection.define('selling', {

    itens: {
        type: Sequelize.STRING,
        allowNull: false
    },

    discount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },

    totalValue: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
    
});

Selling.belongsTo(Companies);
Selling.belongsTo(Clients);

Selling.sync({force: false});

module.exports = Selling;