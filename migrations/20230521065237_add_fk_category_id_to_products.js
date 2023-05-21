/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('products', function(table) {
        // we first have both out products table & categories table.
        // then, create another migration file called add_fk_category_id_to_products (one to many relationship)
        // table.integer('category_id').unsigned() --> in the products table, make --> new col table.integer('category_id').unsigned()
        // refrence this col to the 'id' of the categories table --> .references('id').inTable('categories')
        table.integer('category_id').unsigned().references('id').inTable('categories');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('products', function(table) {
        // in the case that we do not wish to associate categories to products
        // 1. disassociate the fk by dropping
        // 2. drop the fk col from db
        table.dropForeign('category_id');
        table.dropColumn('category_id');
    });
};
