const Product = require('../models/product.model')


let products = [
  new Product('1', 'Bombilla', 'image', 'Hexagonal', '1ud', 'bazar'),
  new Product('2', 'Bombilla', 'image', 'Bolita', '1ud', 'bazar'),
  new Product('3', 'Porta Rollo', 'image', 'Cocina', 'Plastico', 'bazar'),
  new Product('4', 'Bombilla', 'image', 'Hexagonal', '1ud', 'bazar'),
  new Product('5', 'Bombilla', 'image', 'Bolita', '1ud', 'bazar'),
  new Product('6', 'Porta Rollo', 'image', 'Cocina', 'Plastico', 'bazar')
]

module.exports.list = () => new Promise((resolve, reject) => resolve(products));

module.exports.deleteById = (id) => new Promise((resolve, reject) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    resolve();
  } else {
    products = products.filter((product) => product.id !== id);
    resolve(product);
}
});

