// services/cart.service.js
const Cart = require('../models/Cart');

class CartService {
  // Create a new cart
  async createCart(data) {
    const cart = new Cart(data);
    return await cart.save();
  }

  // Get all carts
  async getAllCarts() {
    return await Cart.find().populate('user products.product');
  }

  // Get one cart by ID
  async getCartById(id) {
    return await Cart.findById(id).populate('user products.product');
  }

  // Update a cart
  async updateCart(id, data) {
    return await Cart.findByIdAndUpdate(id, data, { new: true }).populate('user products.product');
  }

  // Delete a cart
  async deleteCart(id) {
    return await Cart.findByIdAndDelete(id);
  }
}

module.exports = new CartService();
