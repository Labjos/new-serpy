require('dotenv').config();
require('../configs/db.config');
const mongoose = require('mongoose');
const Product = require('../models/product.model');
const products = require('../data/products.json');



mongoose.connection.once('open', () => {
  console.info(`*** Connected to the data base ${mongoose.connection.db.databaseName} ***`)
})


Product.create(products)

.then((products) => console.log(`${products.length} products created`))
.then(() => mongoose.disconnect())
.catch((error) => console.error(error))





