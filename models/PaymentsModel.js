const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: { type: String, required: true },
    currency: { type: String, required: true },
    payment_method: { type: String, required: true },
});

module.exports = mongoose.model('payments', paymentSchema);