const express = require('express');
const app = express();
const routes = require('./routes/routes');
const ejs = require('ejs');

// Setting static files
app.use(express.static('public'));

// Setting view engine
app.set('view engine', 'ejs');

// Setting JSON parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// // Setting sessions
// app.use(session({
//     secret: "inventorymanagementsecretcode",
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
// }));

// // Setting flash-sessions
// app.use(flash());

// Setting routes file
app.use(routes);

// Server running
app.listen(3000, () => {
    console.log('The frontend server is running');
});