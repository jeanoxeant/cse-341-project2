const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    //password: { type: String, required: true }, // New field for hashed password
    //subscriptionPlan: { type: String, required: true },
    //joinedDate: { type: Date, default: Date.now },
    //magazinesSubscribed: { type: [String], default: [] }
});

module.exports = mongoose.model('Customer', customerSchema);