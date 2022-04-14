const express = require("express");
const router = express.Router();

// #1 import in the Product model
const {Product} = require('../models')

// READ ROUTE
router.get('/', async (req,res)=>{
    // #2 - fetch all the products (ie, SELECT * from products)
    let products = await Product.collection().fetch();
    res.render('products/index', {
        'products': products.toJSON() // #3 - convert collection to JSON
    })
})



module.exports = router;