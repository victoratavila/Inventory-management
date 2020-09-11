const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const DashboardController = require('../controllers/DashboardController');
const ProductsController = require('../controllers/ProductsController.js');
const axios = require('axios');

// Render login form
router.get('/login', LoginController.login);

router.get('/dashboard', DashboardController.getData);

router.get('/produtos', ProductsController.getProducts);

module.exports = router;