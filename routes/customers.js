/*const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getSingle);
router.post('/:id', customersController.createCustomer);
router.put('/:id', customersController.updateCustomer);
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;*/

const express = require('express');
const {
  createCustomer,
  getCustomers,
  assignProductToCustomer
} = require('../controllers/customerController');
const { customerSchema } = require('../validators/customerValidator');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/', validate(customerSchema), createCustomer);
router.get('/', getCustomers);
router.post('/:id/products/:productId', assignProductToCustomer);

module.exports = router;