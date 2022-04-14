// Setup bookshelf
const bookshelf = require('../bookshelf')

// Set up a Product Model
const Product = bookshelf.model('Product', {
    tableName:'products'
});

// make sure the Proudct is exported so we can import and use it later in Forms and Routes
module.exports = { Product };