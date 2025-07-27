const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Hello World]
    const result = await mongodb.getDatabase().db().collection('products').find();
    result.toArray().then((products) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(products);
    });

};

const getSingle = async (req, res) => {
    //#swagger.tags=['Hello World]
    const productId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('products').find({_id: productId});
    result.toArray().then((products) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(products[0]);
    });
};

const createProduct = async (req, res) => {
    //#swagger.tags=['Hello World]
    const product = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        brand: req.body.brand
    };
    const response = await mongodb.getDatabase().db().collection('products').insertOne(product);
    if (response.acknowledged) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the product.');
    }
};

const updateProduct = async (req, res) => {
    //#swagger.tags=['Hello World]
    const productId = new ObjectId(req.params.id);
    const product = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        brand: req.body.brand
    };
    const response = await mongodb.getDatabase().db().collection('products').replaceOne({_id: productId}, product);
        if (response.modifiedCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the product.');
    }
};

const deleteProduct = async (req, res) => {
    //#swagger.tags=['Hello World]
    const productId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('products').deleteOne({_id: productId}, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'some error occured while updating the product.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createProduct,
    updateProduct,
    deleteProduct
};