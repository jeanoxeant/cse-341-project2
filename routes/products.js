//const express = require('express');
//const router = express.Router();
const router = require('express').Router();

const getProductsController = require('../controllers/products');

const { isAuthenticated } = require("../middleware/validate");

router.get('/', getProductsController.getAll);
router.get('/:id', getProductsController.getProduct);
router.post('/', isAuthenticated, getProductsController.createProduct);
router.put('/:id', isAuthenticated, getProductsController.updateProduct);
router.delete('/:id', isAuthenticated, getProductsController.deleteProduct);

module.exports = router;


