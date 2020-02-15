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

// @route   POST /api/animes
// @desc    Add an anime
// @access  Private
router.post('/', auth, (req, res) => {
    res.send('add new anime');
});

//

module.exports = router;
