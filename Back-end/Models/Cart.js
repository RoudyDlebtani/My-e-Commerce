const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }
  ],
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

// Fix: use Cart, and prevent overwrite
module.exports = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
