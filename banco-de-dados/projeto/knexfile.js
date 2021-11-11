// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'udemy',
    user: 'root',
    password: 'Livramento1997@'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
