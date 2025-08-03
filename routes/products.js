/*const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getAll);
router.get('/:id', productsController.getSingle);
router.post('/:id', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;*/


const express = require('express');
const {
  createProduct,
  getProducts
} = require('../controllers/productController');
const { productSchema } = require('../validators/productValidator');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/', validate(productSchema), createProduct);
router.get('/', getProducts);

module.exports = router;