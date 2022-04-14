// SETUP BOOKSHELF
// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DBNAME
    }
})
const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf;