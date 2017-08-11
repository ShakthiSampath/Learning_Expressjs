const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema   = new Schema({
    title: { type: String, required: true, unique: true},
    rating: { type: Number, default: 0}
});

module.exports = mongoose.model('movies', schema);