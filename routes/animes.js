const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Anime = require('../models/Anime');

// @route   GET /api/animes
// @desc    Get all user animes
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const animes = await Anime.find({ user: req.user.id }).sort({
            date: -1
        });
        res.json(animes);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route   POST /api/animes
// @desc    Add an anime
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Anime name is required.')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msg: errors.array() });
        }

        const { name, season, episode } = req.body;

        try {
            const newAnime = new Anime({
                name,
                season,
                episode,
                user: req.user.id
            });

            const anime = await newAnime.save();

            res.json(anime);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        }
    }
);

// @route   DELETE /api/animes/:id
// @desc    Delete an anime
// @access  Private
router.delete('/:id', auth, (req, res) => {
    res.send('delete an anime');
});

// @route   PUT /api/animes/:id
// @desc    Update an anime
// @access  Private
router.put('/:id', auth, (req, res) => {
    res.send('updates an anime');
});

module.exports = router;
