const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sistemaestoque', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });


module.exports = sequelize;
