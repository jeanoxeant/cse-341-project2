const router = require('express').Router();
router.post('/', (req, res) => {
  res.send('New product added');
});


router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World]
    res.send('Hello World');
});

router.use('/products', require('./products'));

module.exports = router;