const validator = require('../helpers/validate');

const validateCustomer = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        phone: 'required|string'
        //subscriptionPlan: 'required|string',
        //joinedDate: 'required|string',
        //magazinesSubscribed: 'array'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validateLogin = (req, res, next) => {
    const validationRule = {
        email: 'required|email',
        password: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

const validateProduct = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        price: 'required|numeric',
        quantity: 'required|numeric',
        brand: 'required|string'
        //releaseDate: 'required|string',
        //availableCopies: 'required|numeric'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed: ' + JSON.stringify(err),
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    validateCustomer,
    validateLogin, 
    validateProduct
};