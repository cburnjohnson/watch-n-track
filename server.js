const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to DataBase
connectDB();

// Allow server to accept JSON
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tvshows', require('./routes/tvshows'));
app.use('/api/animes', require('./routes/animes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
