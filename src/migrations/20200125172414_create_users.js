exports.up = (knex) => knex.schema.createTable('users', (tb) => {
  tb.increments('id').primary();
  tb.string('name').notNull();
  tb.string('email').notNull().unique();
  tb.string('password').notNull();
});

exports.down = (knex) => knex.schema.dropTable('users');
