const knex = require('knex')(require('../knexfile')['development']);

module.exports = {
  async getAllCategory() {
    return knex('categories').select('*');
  },

  async getCategoryById(id) {
    return knex('categories').where({ id }).first();
  },

  async createCategory(product) {
    return knex('categories').insert(product).returning('*');
  },

  async updateCategory(id, updates) {
    return knex('categories').where({ id }).update(updates).returning('*');
  },

  async deleteCategory(id) {
    return knex('categories').where({ id }).del();
  },
};