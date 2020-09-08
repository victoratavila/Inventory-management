const { Sequelize } = require('sequelize');
const connection = require('../database/connection');
const Companies = require('./Companies');

const Users = connection.define('users', {

    username: {

        type: Sequelize.STRING,
        allowNull: false

    },

    email: {
        
        type: Sequelize.STRING,
        allowNull: false

    }, 

    password: {
        
        type: Sequelize.STRING,
        allowNull: false
        
    }

});

Users.belongsTo(Companies);

Users.sync({force: false}).then(() => {
    console.log('Table created/reloaded');
}).catch((err) => {
    console.log(err);
});

module.exports = Users;