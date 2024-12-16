const mongoose = require('mongoose');
const ProductSchema = new mongoose.Models({
    ProductName: {type: String, required: true},
    Description: {type: String, required: true},
    Quantity:{type: Number, required: true}
    

});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;