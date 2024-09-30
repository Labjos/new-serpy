

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const productSchema = new Schema(
  {
    numProduct: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false

    },
    description: {
      type: String,
      maxlength: [ 20, ' Descripción máximo 2 palabras']

    },
    other: {
      type: String,
      maxlength: [ 20, ' Descripción máximo 2 palabras']
    }
  },
  { timestamps: true }

)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;