/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("mahasiswa", (table) => {
    table.increments("id").primary();
    table.string("nama");
    table.string("alamat");
    table.string("jurusan");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("mahasiswa");
};
