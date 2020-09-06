const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const connection = require('./database/connection');
const authentication = require('./database/authentication');
const path = require('path');

// Setting cors
app.use(cors());

// Setting JSON parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setting ejs end static files
app.set('view engine', 'ejs')   
app.use(express.static(path.join(__dirname, 'public')));

// Setting routes files 
app.use(routes);

// Server listener
app.listen(8080, (req, res) => {
    console.log('The server is running');
})