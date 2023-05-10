const { Pool } = require("pg")

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'firstapp',
    port: 5432
})

module.exports = pool