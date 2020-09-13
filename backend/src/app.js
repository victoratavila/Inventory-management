const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

// Setting cors
app.use(cors());

// Setting JSON parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setting routes files 
app.use(routes);

// Server listener
app.listen(8080, (req, res) => {
    console.log('The backend server is running');
})