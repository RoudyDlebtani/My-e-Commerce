const Wishlist = require('../models/Wishlist');

class WishlistService {
  async createWishlist(data) {
    const wishlist = new Wishlist(data);
    return await wishlist.save();
  }

  async getAllWishlists() {
    return await Wishlist.find().populate('user product');
  }

  async getWishlistById(id) {
    return await Wishlist.findById(id).populate('user product');
  }

  async updateWishlist(id, data) {
    return await Wishlist.findByIdAndUpdate(id, data, { new: true }).populate('user product');
  }

  async deleteWishlist(id) {
    return await Wishlist.findByIdAndDelete(id);
  }
}

module.exports = new WishlistService();
