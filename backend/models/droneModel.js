const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: String,
  model: String,
  batteryLevel: Number,
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
