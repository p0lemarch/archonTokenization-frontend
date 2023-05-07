// models/Customer.js
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  walletAddresses: [
    {
      type: String,
    },
  ],
  // Add any other fields you need for your customer data
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
