const express = require('express');
const products = require('../controllers/products.controller');


const router = express.Router();

router.get('/products', products.list);

router.get('/', (req, res, next) => res.redirect('/home'));


module.exports = router;
