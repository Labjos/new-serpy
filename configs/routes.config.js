const express = require('express');
const misc = require('../controllers/misc.controller');
const products = require('../controllers/products.controller');


const router = express.Router();

router.get('/products', products.list);
router.get('/products/:id/delete', products.delete);
router.get('/', misc.home);

router.get('/', (req, res, next) => res.redirect('/home'));


module.exports = router;
