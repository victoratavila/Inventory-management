const connection = require('./connection');

connection.authenticate().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
})

module.exports = connection;