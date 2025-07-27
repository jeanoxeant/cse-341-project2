const router = require('express').Router();
router.post('/', (req, res) => {
  res.send('New product added');
  res.send('New customer added');
});

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World]
    res.send('Hello World');
});

router.use('/products', require('./products'));
router.use('/customers', require('./customers'));

module.exports = router;