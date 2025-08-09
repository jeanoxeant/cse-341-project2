const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Hello World]
    try {
        const result = await mongodb.getDatabase().db().collection('customers').find();
        result.toArray().then((customers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(customers);
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
    
};

const getCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    if (ObjectId.isValid(req.params.id)) {
        const customerId = new ObjectId(req.params.id);
        const customer = await mongodb.getDatabase().db().collection('customers').find({_id: customerId});
        try {
        customer.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list[0]);
        });
    } catch (error) {
        res.status(400).json({message: err});
    }
    } else {
        res.status(400).json('Invalid ID entered. Please try again.');
    }
    
};

const createCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    
    const newCustomer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    };
    
    try {
    const response = await mongodb.getDatabase().db().collection('customers').insertOne(newCustomer);
    if (response.acknowledged) {
        console.log(response.insertedId);
        res.status(201).json(response);
    }
    } catch (error) {
        res.status(500).json( response.error || "An error occured. Please try again.");
    }
    
};

const updateCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    try {const customerId = new ObjectId(req.params.id);
    const customer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    };
    const response = await mongodb.getDatabase().db().collection('customers').replaceOne({_id: customerId}, customer);
        if (response.modifiedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the customer.');
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
    
};

const deleteCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    const customerId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('customers').deleteOne({_id: customerId}, true);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the customer.');
    }
};

module.exports = {
    getAll,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
};