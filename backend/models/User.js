const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: { type: [String], required: true },  // List of skills a user can offer
  timeCredits: { type: Number, default: 0 }    // User's earned time credits
});

module.exports = mongoose.model('User', userSchema);
