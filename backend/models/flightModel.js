const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  drone: { type: mongoose.Schema.Types.ObjectId, ref: "Drone" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startTime: Date,
  endTime: Date,
  status: {
    type: String,
    enum: ["completed", "in-progress"],
    default: "in-progress",
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
