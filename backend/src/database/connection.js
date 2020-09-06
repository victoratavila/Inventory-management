const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sistemaestoque', 'root', 'Vi@k5e82w43', {
    host: 'localhost',
    dialect: 'mysql'
  });


module.exports = sequelize;