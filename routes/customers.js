//const express = require('express');
//const router = express.Router();
const router = require('express').Router();


const getCustomersController = require('../controllers/customers');
const { isAuthenticated } = require('../middleware/validate');

router.get('/', getCustomersController.getAll);
router.get('/:id', getCustomersController.getCustomer);
router.post('/', isAuthenticated, getCustomersController.createCustomer);
router.put('/:id', isAuthenticated, getCustomersController.updateCustomer);
router.delete('/:id', isAuthenticated, getCustomersController.deleteCustomer);

module.exports = router;

