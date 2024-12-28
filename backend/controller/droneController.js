const Drone = require("../models/droneModel");

// Create a new drone
exports.createDrone = async (req, res) => {
  const drone = new Drone(req.body);
  await drone.save();
  res.status(201).json(drone);
};

// Get all drones
exports.getAllDrones = async (req, res) => {
  const drones = await Drone.find();
  res.status(200).json(drones);
};

// Get a specific drone by ID
exports.getDroneById = async (req, res) => {
  const drone = await Drone.findById(req.params.id);
  res.status(200).json(drone);
};

// Update a drone
exports.updateDrone = async (req, res) => {
  const drone = await Drone.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(drone);
};

// Delete a drone
exports.deleteDrone = async (req, res) => {
  await Drone.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Drone deleted" });
};
