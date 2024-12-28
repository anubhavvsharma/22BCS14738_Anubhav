const express = require("express");
const router = express.Router();
const flightController = require("../controller/flightController");

// Define routes for flights
router.post("/", flightController.createFlight); // Create a new flight
router.get("/", flightController.getAllFlights); // Get all flights
router.get("/:id", flightController.getFlightById); // Get flight by ID
router.put("/:id", flightController.updateFlight); // Update flight by ID
router.delete("/:id", flightController.deleteFlight); // Delete flight by ID

module.exports = router;
