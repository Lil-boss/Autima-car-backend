const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    total: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    isDeliver: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
});

module.exports = mongoose.model('Orders', orderSchema);