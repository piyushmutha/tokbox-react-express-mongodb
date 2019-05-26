let mongoose = require('mongoose');
let Config = require('../config.json');
mongoose.connect(Config.db_url);
const Schema = mongoose.Schema;

const userModel = {
    name: String
};

module.exports = mongoose.model('users', userModel)