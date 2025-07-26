const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Hello World]
    const result = await mongodb.getDatabase().db().collection('customers').find();
    result.toArray().then((customers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(customers);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Hello World]
    const customerId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('customers').find({_id: customerId});
    result.toArray().then((customers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(customers[0]);
    });
};

const createCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    const customer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    };
    const response = await mongodb.getDatabase().db().collection('customers').insertOne(customer);
    if (response.acknowledged) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the customer.');
    }
};

const updateCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    const customerId = new ObjectId(req.params.id);
    const customer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    };
    const response = await mongodb.getDatabase().db().collection('customers').replaceOne({_id: customerId}, contact);
        if (response.modifiedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the customer.');
    }
};

const deleteCustomer = async (req, res) => {
    //#swagger.tags=['Hello World]
    const customerId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: customerId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the customer.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createCustomer,
    updateCustomer,
    deleteCustomer
};