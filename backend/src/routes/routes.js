const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../Controllers/ProductsController');
const CompanyController = require('../Controllers/CompaniesController');
const UsersController = require('../Controllers/UsersController');
const LoginController = require('../Controllers/LoginController');
const Company = require('../models/Companies');
const Users = require('../models/Users');

// Product routes
router.get('/products', ProductController.getProducts);
router.post('/create', ProductController.createProduct);
router.get('/search/:slug', ProductController.searchByName);
router.delete('/delete/:id', ProductController.deleteProduct);
router.put('/update/:id', ProductController.updateProduct);
router.put('/amount/:id', ProductController.updateAmount);
router.get('/report', ProductController.reportData);
router.get('/products/:companyId', ProductController.searchByCompanyId);
router.get('/page/:num', ProductController.pagination);
router.get('/product/:id', ProductController.searchById);

// Company routes
router.post('/company', CompanyController.registerCompany );
router.get('/company', CompanyController.getCompanies );
router.get('/company/:id', CompanyController.getCompanyById);

// User routes
router.get('/user', UsersController.getUser);
router.post('/user', UsersController.createUser);
router.get('/user/:companyId', UsersController.searchByCompanyId);

// // Authentication for login
// router.post('/validation', LoginController.validation);

module.exports = router;