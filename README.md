# __INITIAL SETUP__ 

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



## RENDER THE DATA IN OUR FIRST TABLE - BACK TO ROUTE

Add product.js in /routes folder

    const express = require("express");
    const router = express.Router();

    // #1 import in the Product model
    const {Product} = require('../models')

    router.get('/', async (req,res)=>{
        // #2 - fetch all the products (ie, SELECT * from products)
        let products = await Product.collection().fetch();
        res.render('products/index', {
            'products': products.toJSON() // #3 - convert collection to JSON
        })
    })

    module.exports = router;

Import the route into index.js (main)

    const productRoutes = require('./routes/products');
    app.use('/products', productRoutes);

Create index.hbs in /views/products folder

# __CREATE__

## INSTALLATION

    yarn add forms

Create form module - Add index.js in ./forms folder

    // import in caolan forms
    const forms = require("forms");
    // create some shortcuts
    const fields = forms.fields;
    const validators = forms.validators;

    var bootstrapField = function (name, object) {
        if (!Array.isArray(object.widget.classes)) { object.widget.cllogin
    asses = []; }

        if (object.widget.classes.indexOf('form-control') === -1) {
            object.widget.classes.push('form-control');
        }

        var validationclass = object.value && !object.error ? 'is-valid' : '';
        validationclass = object.error ? 'is-invalid' : validationclass;
        if (validationclass) {
            object.widget.classes.push(validationclass);
        }

        var label = object.labelHTML(name);
        var error = object.error ? '<div class="invalid-feedback">' + object.error + '</div>' : '';

        var widget = object.widget.toHTML(name, object);
        return '<div class="form-group">' + label + widget + error + '</div>';
    };

Setup for template for form to Create Product

    const createProductForm = () => {
        return forms.create({
            'name': fields.string({
                required: true,
                errorAfterField: true,
                cssClasses: {
                    label: ['form-label']
                }
            }),
            'cost': fields.string({
                required: true,
                errorAfterField: true,
                cssClasses: {
                    label: ['form-label']
                }
            }),
            'description': fields.string({
                required: true,
                errorAfterField: true,
                cssClasses: {
                    label: ['form-label']
                }
            }),
        })
    };