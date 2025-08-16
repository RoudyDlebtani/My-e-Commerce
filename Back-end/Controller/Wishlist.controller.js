const wishlistService = require('../services/wishlist.service');

class WishlistController {
  async createWishlist(req, res) {
    try {
      const wishlist = await wishlistService.createWishlist(req.body);
      res.status(201).json(wishlist);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllWishlists(req, res) {
    try {
      const wishlists = await wishlistService.getAllWishlists();
      res.json(wishlists);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getWishlistById(req, res) {
    try {
      const wishlist = await wishlistService.getWishlistById(req.params.id);
      if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
      res.json(wishlist);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateWishlist(req, res) {
    try {
      const wishlist = await wishlistService.updateWishlist(req.params.id, req.body);
      if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
      res.json(wishlist);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteWishlist(req, res) {
    try {
      await wishlistService.deleteWishlist(req.params.id);
      res.json({ message: 'Wishlist deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new WishlistController();
