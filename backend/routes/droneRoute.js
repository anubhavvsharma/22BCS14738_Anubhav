const express = require("express");
const router = express.Router();
const droneController = require("../controller/droneController");

// Define routes for drones
router.post("/", droneController.createDrone); // Create a new drone
router.get("/", droneController.getAllDrones); // Get all drones
router.get("/:id", droneController.getDroneById); // Get drone by ID
router.put("/:id", droneController.updateDrone); // Update drone by ID
router.delete("/:id", droneController.deleteDrone); // Delete drone by ID

module.exports = router;
