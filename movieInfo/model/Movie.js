var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema   = new Schema({
    title: String,
    rating: Number
});

module.exports = mongoose.model('Movie', MovieSchema);