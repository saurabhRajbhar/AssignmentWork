// routes/cardRoutes.js
const express = require('express');
const Card = require("../Model/Card");
const router = express.Router();

// Create a new card
router.post('/', async (req, res) => {
    const { title, description, link, category } = req.body;

    if (!title || !category) {
        return res.status(400).json({ error: 'Title and category are required' });
    }

    try {
        const newCard = new Card({ title, description, link, category });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const card = await Card.findOne({ title });

        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json(card);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update a card
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, link, category } = req.body;

    try {
        const updatedCard = await Card.findByIdAndUpdate(
            id,
            { title, description, link, category },
            { new: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json(updatedCard);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a card
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCard = await Card.findByIdAndDelete(id);

        if (!deletedCard) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json({ message: 'Card deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
