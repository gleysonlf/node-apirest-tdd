module.exports = {
  test: {
    client: 'pg',
    version: '12',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'barriga'
    },
    migrations: {
      directory: 'src/migrations'
    }
  }
};
