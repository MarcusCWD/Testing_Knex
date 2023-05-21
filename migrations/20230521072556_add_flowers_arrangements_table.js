/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('flowers_arrangements', function(table) {
        table.increments('id').primary();
        table.integer('flower_id').unsigned().references('id').inTable('flowers');
        table.integer('arrangement_id').unsigned().references('id').inTable('arrangements');
        // other columns if needed
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('flower_arrangement');
};
