let mongoose = require('mongoose');
let Config = require('../config.json');
mongoose.connect(Config.db_url);
const Schema = mongoose.Schema;

const scheduleModel = {
    by: String,
    with: String,
    at: Number,
    done: Boolean
};

module.exports = mongoose.model('schedule', scheduleModel)