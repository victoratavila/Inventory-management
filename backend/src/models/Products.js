const { Sequelize } = require('sequelize');
const connection = require('../database/connection');
const Companies = require('../models/Companies');

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

    slug:  {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
        
    },

    amount: {
        
        type: Sequelize.INTEGER,
        allowNull: false
        
    },

    weight: {
        
        type: Sequelize.FLOAT,
        allowNull: false
        
    }


});

Product.belongsTo(Companies);

Product.sync({force: false  }).then(() => {
}).catch((err) => {
    console.log(err);
});

module.exports = Product;