const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const DashboardController = require('../controllers/DashboardController');
const ProductsController = require('../controllers/ProductsController.js');
const ClientsController = require('../controllers/ClientsController.js');
const AccessController = require('../controllers/AccessController');
const SellingsController = require('../controllers/SellingsController');
const axios = require('axios');

// Render login form
router.get('/login', LoginController.login);
router.get('/dashboard', DashboardController.getData);
router.get('/produtos', ProductsController.getProducts);
router.post('/produtos', ProductsController.createProduct);
router.get('/produtos/:num', ProductsController.pagination);
router.get('/buscar/:slug', ProductsController.foundProduct);
router.post('/produtos/delete/:id', ProductsController.deleteProduct);

// Rotas de clientes
router.get('/clientes', ClientsController.getClients)
router.post('/clientes', ClientsController.createClient)
router.post('/clientes/:cpf', ClientsController.deleteClient);
router.get('/clientes/:cpf', ClientsController.searchByCPF);
router.post('/update/client', ClientsController.updateClient);

// Rotas de acessos
router.get('/acessos', AccessController.getAllowed);
router.post('/acessos', AccessController.createUser);
router.post('/acessos/:id', AccessController.deleteUser);

// Rotas de vendas
router.get('/vendas', SellingsController.getAll);
router.post('/vendas', SellingsController.saveSelling);

module.exports = router;