module.exports = (mongoose) => {
  const Customer = mongoose.model(
    'customers',
    mongoose.Schema({
      customerName: {
        type: String
      },
      fontSize: {
        type: Number
      },
      fontFamily: {
        type: String
      },
      inspiration: {
        type: String
      },
      colors: {
        type: [String]
      }
    })
  );

  return Customer;
};