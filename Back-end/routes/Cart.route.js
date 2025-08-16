// routes/cart.route.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Create cart
router.post('/', cartController.createCart);

// Get all carts
router.get('/', cartController.getAllCarts);

// Get cart by ID
router.get('/:id', cartController.getCartById);

// Update cart
router.put('/:id', cartController.updateCart);

// Delete cart
router.delete('/:id', cartController.deleteCart);

module.exports = router;
