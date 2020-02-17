const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Movie = require('../models/Movie');

// @route   GET /api/movies
// @desc    Get users movies
// @access  Private
router.get('/', auth, (req, res) => {
    res.send('get users movies');
});

// @route   POST /api/movies
// @desc    Adds a new movie
// @access  Private
router.post('/', auth, (req, res) => {
    res.send('add new movie');
});

// @route   DELETE /api/movies/:id
// @desc    Deletes a movie
// @access  Private
router.delete('/', auth, (req, res) => {
    res.send('delete a movie');
});

// @roue    PUT /api/movies/:id
// @desc    Updates a movie
// @access  Private
router.put('/', auth, (req, res) => {
    res.send('update movie');
});

module.exports = router;
