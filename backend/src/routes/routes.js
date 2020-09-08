const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../Controllers/ProductsController');
const CompanyController = require('../Controllers/CompaniesController');
const UsersController = require('../Controllers/UsersController');
const LoginController = require('../Controllers/LoginController');
const Company = require('../models/Companies');
const Users = require('../models/Users');
const authentication = require('../middlewares/authentication');

// Product routes
router.get('/', authentication, ProductController.getProducts);
router.get('/', authentication, ProductController.getProducts);
router.post('/create', authentication, ProductController.createProduct);
router.get('/search/:name', authentication, ProductController.searchByName);
router.delete('/delete/:id', authentication, ProductController.deleteProduct);
router.put('/update/:id', authentication, ProductController.updateProduct);
router.put('/amount/:id',authentication, ProductController.updateAmount);
router.get('/report', authentication, ProductController.reportData);

// Products by company
router.get('/products/:companyId', authentication, ProductController.searchByCompanyId);

// Company routes
router.post('/company', authentication, CompanyController.registerCompany );
router.get('/company', authentication, CompanyController.getCompanies );
router.get('/company/:id', authentication, CompanyController.getCompanyById);

// User routes
router.post('/user', authentication, UsersController.createUser);

// Users by company
router.get('/user/:companyId', authentication, UsersController.searchByCompanyId);


// Authentication for login
router.post('/validation', LoginController.validation);

module.exports = router;