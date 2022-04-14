## SETUP EXPRESS 

    npm init 

EXPRESS

    yarn add express hbs wax-on dotenv
    npm install -g nodemon
    npm start

## SETUP ROUTES

## SETUP VIEWS AND LAYOUTS FOR TEMPLATE INHERITANCE

## SETUP MIGRATIONS

    CREATE USER '<username>'@'%' IDENTIFIED WITH mysql_native_password BY '<password>';

    grant all privileges on *.* to '<username>'@'%';

    FLUSH PRIVILEGES;

Install 

    yarn add db-migrate db-migrate-mysql mysql

Configure db-migrate

    {
        "dev": {
            "driver": "mysql",
            "user": "foo",
            "password":"bar",
            "database":"organic"
        }
    }

Set up migrate command

    Create a file :  db-migrate.sh and put this code inside
    node node_modules/db-migrate/bin/db-migrate "$@"

    Run in terminal
    chmod +x db-migrate.sh

    Update the exports.up and exports.down with the models
    
    Run in terminal to migrate:
    ./db-migrate.sh up

Create your first table 
                                                                      
    ./db-migrate.sh create products


## INSTALL BOOKSHELF

    yarn add knex
    yarn add bookshelf

Setup folder /bookshelf and add index.js

    // Setting up the database connection
    const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: <USERNAME>,
        password: <PASSWORD>,
        database: <DATABASE NAME>
    }
    })
    const bookshelf = require('bookshelf')(knex)

    module.exports = bookshelf;

## CREATE MODELS

Setup folder /models and add index.js

    const bookshelf = require('../bookshelf')
    const Product = bookshelf.model('Product', {
        tableName:'products'
    });
    module.exports = { Product };

