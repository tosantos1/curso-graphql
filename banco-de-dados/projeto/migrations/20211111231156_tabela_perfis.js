
exports.up = function (knex, Promise) {
  return knex.schema.createTable('perfis', function (table) {
    table.increments('id').primary();
    table.string('nome').notNull().unique()
    table.string('descricao').notNull();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('perfis')
}

