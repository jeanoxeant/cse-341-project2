module.exports = (mongoose) => {
  const productSchema = mongoose.Schema({
    name: {
      type: String
    },
    price: {
      type: String
    },
    quantity: {
      type: String
    },
    brand: {
      type: String
    }
  });

  return mongoose.model('products', productSchema);
};