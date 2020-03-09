const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path');

// Connect to DataBase
connectDB();

// Allow server to accept JSON
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tvshows', require('./routes/tvshows'));
app.use('/api/anime', require('./routes/anime'));
app.use('/api/movies', require('./routes/movies'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
