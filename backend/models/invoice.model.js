const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  invoiceno: { type: String, requird: true },
  date: { type: String, required: true },
  total: { type: String, required: true },
  paid: { type: String, required: true, unique: true },
  owing: { type: String, required: true },
  updatedat: { type: Date, default: Date.now },
  createdat: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Invoice", invoiceSchema);
