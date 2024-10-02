//const Product = require('../models/product.model');

const Product = require('../models/product.model')
const createError = require('http-errors');
const mongoose = require('mongoose');

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


module.exports.create = (req, res, next) => res.render('products/create');

module.exports.doCreate = (req, res, next) => {
  console.debug(req.body)
  const product = req.body;
  Product.create(product)
  .then((product) => 
    res.redirect('/products'))
  .catch((error) => {
    if (error  instanceof mongoose.Error.ValidationError) {
      res
      .status(400)
      .render('products/create', { product, errors: error.errors })
    } else {
      next(error)
    }
});

}

module.exports.detail = (req, res, next) => {
    const { id }  = req.params;
    Product.findById(id)
      .then((product) => {
        if (!product) {
          next(createErrors(404, 'Producto no encontrado!'))
        } else {
          res.render('products/detail', { product } )

        }
      })
      .catch((error) => next(error));
}


module.exports.edit = (req, res, next) => {
  const { id }  = req.params;
    Product.findById(id)
    .then((product) => {
      if (!product) {
        next(createErrors(404, 'Producto no encontrado'))
      } else {
      res.render('products/edit', { product })
      }
    })
    .catch((error) => next(error));
};

module.exports.doEdit = (req, res, next) => {
  console.info(req.body)
  Product.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
  })
    .then((product) => {
      if (!product) {
        next(createError(404, "Product Not Found"))
      } else {
        res.redirect(`/products/${product.id}`)
      }
    } )
    .catch((error) => next(error))


}