// controllers/cart.controller.js
const cartService = require('../services/cart.service');

class CartController {
  async createCart(req, res) {
    try {
      const cart = await cartService.createCart(req.body);
      res.status(201).json(cart);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllCarts(req, res) {
    try {
      const carts = await cartService.getAllCarts();
      res.json(carts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCartById(req, res) {
    try {
      const cart = await cartService.getCartById(req.params.id);
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateCart(req, res) {
    try {
      const cart = await cartService.updateCart(req.params.id, req.body);
      if (!cart) return res.status(404).json({ message: 'Cart not found' });
      res.json(cart);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteCart(req, res) {
    try {
      await cartService.deleteCart(req.params.id);
      res.json({ message: 'Cart deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new CartController();
