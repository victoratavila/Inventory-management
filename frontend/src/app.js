const express = require('express');
const app = express();
const routes = require('./routes/routes');
const ejs = require('ejs');
const axios = require('axios');

// Setting static files
app.use(express.static('public'));

// Setting view engine
app.set('view engine', 'ejs');

// Setting JSON parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setting routes file
app.use(routes);

// Server running
app.listen(3000, () => {
    console.log('The frontend server is running');
});