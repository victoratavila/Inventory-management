const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../Controllers/ProductsController');
const CompanyController = require('../Controllers/CompaniesController');
const UsersController = require('../Controllers/UsersController');
const Company = require('../models/Companies');
const Users = require('../models/Users');

// Product routes
router.get('/', ProductController.getProducts);
router.post('/create', ProductController.createProduct);
router.get('/search/:name', ProductController.searchByName);
router.delete('/delete/:id', ProductController.deleteProduct);
router.put('/update/:id', ProductController.updateProduct);
router.put('/amount/:id', ProductController.updateAmount);
router.get('/report', ProductController.reportData);
router.get('/products/:companyId', ProductController.searchByCompanyId);

// Company routes
router.post('/company', CompanyController.registerCompany );
router.get('/company', CompanyController.getCompanies );

// User routes
router.post('/user', UsersController.createUser);
router.get('/user/:companyId', UsersController.searchByCompanyId);

module.exports = router;