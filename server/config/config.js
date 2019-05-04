module.exports = {
    port: process.env.PORT || 8000,
    db: {
        database: process.env.DB_NAME || 'auth-setup',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: 'auth-setup'
        }
    },
}