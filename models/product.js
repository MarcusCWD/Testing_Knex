const knex = require('knex')(require('../knexfile')['development']);

module.exports = {
  async getAllProducts() {
    return knex('products').select('*');
  },

  async getProductById(id) {
    return knex('products').where({ id }).first().then((rows) => {
      if (rows) {
        return rows
      }
      else{
        throw new Error('Product not found');
      }
    })
  },

  async createProduct(product) {
    return knex('products').insert(product).returning('*');
  },

  async updateProduct(id, updates) {
    return knex('products').where({ id }).update(updates).returning('*');
  },

  async deleteProduct(id) {
    return knex('products').where({ id }).del();
  },
};