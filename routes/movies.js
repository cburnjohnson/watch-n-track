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
        const movies = await Movie.find({ user: req.user.id }).sort({
            date: -1
        });

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
router.delete('/:id', auth, async (req, res) => {
    try {
        let movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ msg: 'Movie not found.' });
        }

        // Check if user owns Movie
        if (movie.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized.' });
        }

        await Movie.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Movie deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @roue    PUT /api/movies/:id
// @desc    Updates a movie
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name } = req.body;

    // build a Movie object
    const movieFields = {};
    if (name) movieFields.name = name;

    try {
        let movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ msg: 'Movie not found.' });
        }

        // Check if user owns movie
        if (movie.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        movie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: movieFields },
            { new: true }
        );

        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
