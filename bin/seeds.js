require('dotenv').config();
require('../configs/db.config');
const Product = require('../models/product.model');
const products = require('../data/products.json');


Product.create(products)
.then((products) => console.log(`${products.length} products created`))
.catch((error) => console.error(error))





