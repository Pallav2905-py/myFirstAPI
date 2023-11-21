const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    userId: Number,
    id:Number,
    title: {
        type:String,
        required: true,
    },
    completed: Boolean,
})

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;