const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    UserID: {type: String, required: true},
    ProductName: {type: String, required: true},
    Quantity:{type: Number, required: true},
    location: {type: String, required: true},
    deliveryDate: {type: String, required: true}

});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;