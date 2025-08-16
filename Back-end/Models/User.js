const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // store hashed
  createdAt: { type: Date, default: Date.now },
  role: { type: String, required: true }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
