const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  role: { type: String, enum: ["admin", "pilot"], default: "pilot" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
