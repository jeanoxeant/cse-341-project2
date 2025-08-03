const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, min: 100, max: 400 },
    quantity: { type: Number, min: 0, max: 10 },
    brand: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);