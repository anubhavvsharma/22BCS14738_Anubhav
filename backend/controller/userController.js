const User = require("../models/userModel");

// Create a new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
};

// Update a user
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(user);
};

// Delete a user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "User deleted" });
};
