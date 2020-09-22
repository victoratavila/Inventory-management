const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../Controllers/ProductsController');
const CompanyController = require('../Controllers/CompaniesController');
const UsersController = require('../Controllers/UsersController');
const ClientController = require('../Controllers/ClientController');
const Company = require('../models/Companies');
const Users = require('../models/Users');
const Clients = require('../models/Clients');

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
router.delete('/user/:id', UsersController.deleteUser);

// Client routes
router.get('/clients', ClientController.getClients);
router.post('/clients', ClientController.createClient);
router.put('/clients', ClientController.updateClient);
router.delete('/clients/:cpf', ClientController.deleteClient);
router.get('/clients/:cpf', ClientController.searchByCPF);

module.exports = router;