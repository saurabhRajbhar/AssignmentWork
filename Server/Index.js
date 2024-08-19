const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
//Use the CORS middleware
app.use(cors());
// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/help-center', {

}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Ping Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Card Routes
app.use('/cards', cardRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
