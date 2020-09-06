const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const ProductController = require('../Controllers/Products');

router.get('/', ProductController.getProducts);

router.post('/create', ProductController.createProduct);

router.get('/search/:name', ProductController.searchByName);

router.delete('/delete/:id', ProductController.deleteProduct);

router.put('/update/:id', ProductController.updateProduct);

router.put('/amount/:id', ProductController.updateAmount);

module.exports = router;