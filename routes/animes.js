const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Anime = require('../models/Anime');

// @route   GET /api/animes
// @desc    Get all user animes
// @access  Private
router.get('/', auth, (req, res) => {
    res.send('get all animes');
});

module.exports = router;
