const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const TvShow = require('../models/TvShow');

// @route   GET /api/tvshows
// @desc    Get all users Tv Shows
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const tvShows = await TvShow.find({ user: req.user.id }).sort({
            date: -1
        });
        res.json(tvShows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});
