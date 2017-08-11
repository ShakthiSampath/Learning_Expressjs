const movieService = require('./movies.service');

const addNewMovie = function (movieObj, done) {
    movieService.addNewMovie(movieObj, done);
}

const findMovieByTitle = function(title, done) {
    movieService.findMovieByTitle(title, done);
}

module.exports = {
    addNewMovie,
    findMovieByTitle
}