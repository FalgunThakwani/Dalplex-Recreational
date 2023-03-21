const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userid: { type: String, requird: true },
  program: { type: String, requird: true },
  slot: { type: String, required: true },
  semester: { type: String, required: true },
  registeron: { type: String, required: true, unique: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);
