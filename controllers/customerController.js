const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find().populate('products');
  res.json(customers);
};

exports.assignProductToCustomer = async (req, res) => {
  const { id, productId } = req.params;

  const customer = await Customer.findById(id);
  if (!customer) throw new Error('Customer not found');

  if (customer.products.includes(productId)) {
    return res.status(400).json({ error: 'Product already assigned to customer' });
  }

  customer.products.push(productId);
  await customer.save();
  res.json(customer);
};