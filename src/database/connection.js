const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sistemaestoque', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


module.exports = sequelize;