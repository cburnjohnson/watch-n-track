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

// @route   POST /api/tvshows
// @desc    Add new tv show
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'TV show name is required.')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, season, episode } = req.body;

        try {
            const newTvShow = new TvShow({
                name,
                season,
                episode,
                user: req.user.id
            });

            const tvShow = await newTvShow.save();

            res.json(tvShow);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        }
    }
);

module.exports = router;
