// npx knex migrate:make init --migrations-directory db/migrations
exports.up = function (knex) {
  return knex.schema.createTable('usuario', (table) => {
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.timestamps(true, true);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('usuario');
};
