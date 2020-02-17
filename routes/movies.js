const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Movie = require('../models/Movie');

module.exports = router;
