const express = require('express');
const router = express.Router();

// @route   POST /api/users
// @desc    Registers a user
// @access  Public
router.post('/', (req, res) => {
    res.json({ msg: 'signs user up' });
});

module.exports = router;
