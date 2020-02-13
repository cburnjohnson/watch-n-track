const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route  GET /api/auth
// @desc   Get logged in User
// @access Private
router.get('/', (req, res) => {
    res.send('gets logged in user');
});

// @route   POST /api/auth
// @desc    Logs user in and gives token
// @access  Public
router.post(
    '/',
    [
        check('email', 'Valid email is required.').isEmail(),
        check('password', 'Valid password is required').exists()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    }
);

module.exports = router;
