const express = require('express');
const router = express.Router();

const cartRoutes = require('./Cart.route');
const productRoutes = require('./Product.route');
const userRoutes = require('./User.route');
const wishlistRoutes = require('./Wishlist.route');

router.use('/carts', cartRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/wishlists', wishlistRoutes);

module.exports = router;
