const mongoose = require('mongoose');

const TvShowSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    season: {
        type: String
    },
    episode: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('tvshow', TvShowSchema);