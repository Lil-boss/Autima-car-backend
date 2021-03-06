const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    education: { type: String },
    address: { type: String },
    phone: { type: String },
    socialLinks: { type: String },
    isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);