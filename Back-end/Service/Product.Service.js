const Product = require('../models/Product');

class ProductService {
  async createProduct(data) {
    const product = new Product(data);
    return await product.save();
  }

  async getAllProducts() {
    return await Product.find();
  }

  async getProductById(id) {
    return await Product.findById(id);
  }

  async updateProduct(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductService();
