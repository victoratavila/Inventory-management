const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config({path:__dirname+'/./../../.env'});

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT  } = process.env;

const sequelize = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false
  });


module.exports = sequelize;
