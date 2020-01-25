
exports.up = (knex) => {
  return knex.schema.createTable('users', tb => {
    tb.increments('id').primary();
    tb.string('name').notNull();
    tb.string('email').notNull().unique();
    tb.string('password').notNull();
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
