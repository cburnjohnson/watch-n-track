const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Movie = require('../models/Movie');

// @route   GET /api/movies
// @desc    Get users movies
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const movies = await Movie.findById(req.user.id).sort({ date: -1 });

        res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route   POST /api/movies
// @desc    Adds a new movie
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Movie name is required.')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;

        try {
            const newMovie = new Movie({
                name,
                user: req.user.id
            });

            const movie = await newMovie.save();

            res.json(movie);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: 'Server Error' });
        }
    }
);

// @route   DELETE /api/movies/:id
// @desc    Deletes a movie
// @access  Private
router.delete('/', auth, async (req, res) => {
    res.send('delete a movie');
});

// @roue    PUT /api/movies/:id
// @desc    Updates a movie
// @access  Private
router.put('/', auth, async (req, res) => {
    res.send('update movie');
});

module.exports = router;
