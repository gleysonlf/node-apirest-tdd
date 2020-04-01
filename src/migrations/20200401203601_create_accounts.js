
exports.up = (knex) => {
  return knex.schema.createTable('accounts', tb => {
    tb.increments('id').primary();
    tb.string('name').notNull();
    tb.integer('user_id')
      .references('id')
      .inTable('users')
      .notNull();
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('accounts');
};

