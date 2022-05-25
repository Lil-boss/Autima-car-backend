const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    reviewTitle: { type: String, required: true },
    reviewDes: { type: String, required: true },
    rating: { type: Number, required: true },
});

module.exports = mongoose.model('reviews', reviewSchema);