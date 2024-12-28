const Flight = require("../models/flightModel");

// Create a new flight
exports.createFlight = async (req, res) => {
  const flight = new Flight(req.body);
  await flight.save();
  res.status(201).json(flight);
};

// Get all flights
exports.getAllFlights = async (req, res) => {
  const flights = await Flight.find();
  res.status(200).json(flights);
};

// Get a specific flight by ID
exports.getFlightById = async (req, res) => {
  const flight = await Flight.findById(req.params.id);
  res.status(200).json(flight);
};

// Update a flight
exports.updateFlight = async (req, res) => {
  const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(flight);
};

// Delete a flight
exports.deleteFlight = async (req, res) => {
  await Flight.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Flight deleted" });
};
