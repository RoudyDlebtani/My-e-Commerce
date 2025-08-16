const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  stockQuantity: { type: Number, default: 0 },
  category: { type: String }  // fixed typo
});

// Prevent OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
