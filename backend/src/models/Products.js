const { Sequelize } = require('sequelize');
const connection = require('../database/connection');

const Product = connection.define('product', {

    name: {

        type: Sequelize.STRING,
        allowNull: false

    },

    description: {
        
        type: Sequelize.STRING,
        allowNull: false

    }, 

    category: {
        
        type: Sequelize.STRING,
        allowNull: false
        
    }, 

    price: {
        
        type: Sequelize.INTEGER,
        allowNull: false
        
    },

    amount: {
        
        type: Sequelize.INTEGER,
        allowNull: false
        
    },

    weight: {
        
        type: Sequelize.INTEGER,
        allowNull: false
        
    }

});

Product.sync({force: false}).then(() => {
    console.log('Table created/reloaded');
}).catch((err) => {
    console.log(err);
});

module.exports = Product;