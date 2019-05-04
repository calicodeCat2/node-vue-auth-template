// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      password: "password",
      database: "auth-setup",
      host: "localhost"
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/production"
    }
  }
};