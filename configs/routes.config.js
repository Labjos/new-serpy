const express = require('express');
const misc = require('../controllers/misc.controller');
const products = require('../controllers/products.controller');

const router = express.Router();

//Read
router.get('/products', products.list);
router.get('/products/:id', products.detail);

//Create
router.get('/create-product', products.create);
router.post('/create-product', products.doCreate);

//Delete
router.get('/products/:id/delete', products.delete);

//Update
router.get('/products/:id/edit', products.edit);
router.post('/products/:id/edit', products.doEdit);





router.get('/', misc.home);
router.get('/', (req, res, next) => res.redirect('/home'));

module.exports = router;
