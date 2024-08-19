// models/Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    link: {
        type: String, // Optional: Could be a URL for further reading
    },
    category: {
        type: String, // Helps categorize cards, e.g., "Account", "Billing", etc.
    },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
