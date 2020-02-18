const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const TvShow = require('../models/TvShow');

// @route   GET /api/tvshows
// @desc    Get all users TV Shows
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
// @desc    Add new TV show
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'TV show name is required')
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

// @route   DELETE /api/tvshows/:id
// @desc    Deletes a TV show
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let tvShow = await TvShow.findById(req.params.id);

        if (!tvShow) return res.status(404).json({ msg: 'TV show not found' });

        // Make sure the user owns the TV show
        if (tvShow.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await TvShow.findByIdAndRemove(req.params.id);

        res.json({ msg: 'TV Show deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route   PUT /api/tvshows/:id
// @desc    Updates TV show
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, season, episode } = req.body;

    // Build TV show object
    const tvShowFields = {};
    if (name) tvShowFields.name = name;
    if (season) tvShowFields.season = season;
    if (episode) tvShowFields.episode = episode;

    try {
        let tvShow = await TvShow.findById(req.params.id);

        if (!tvShow) return res.status(404).json({ msg: 'TV Show not found' });

        // Make sure the user owns the TV show
        if (tvShow.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        tvShow = await TvShow.findByIdAndUpdate(
            req.params.id,
            {
                $set: tvShowFields
            },
            { new: true }
        );

        res.json(tvShow);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
