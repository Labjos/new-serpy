//const Product = require('../models/product.model');

const Product = require('../models/product.model')
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  
  Product.find()
    .then((products) => res.render('products/list', { products }))
    .catch((error) => next(error))
}

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((product) => {
      if (!product) {
        next(createError(404, 'Producto no encontrado!'))
      } else {
        res.redirect('/products')
      }
    })
    .catch((error) => next(error));
}

