

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false,
      validate: {
        validator: function (image) {
          try {
            new URL(image);
            return true;
          } catch (error) {
            return false;
        }
      }, 
      message: ('Invalida Image URL')
    }
  },
    description: {
      type: String,
      maxlength: [ 20, ' Descripción máximo 2 palabras']

    },
    other: {
      type: String,
      maxlength: [ 20, ' Descripción máximo 2 palabras']
    },
    category: {
      type: String,
      enum: ['bazar', 'jardin', 'cepilleria', 'textil', 'plasticos', 'burletes', 'incorporacion', 'promocion' ],
      default: 'incorporacion'
    }
  },
  { timestamps: true }

)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;