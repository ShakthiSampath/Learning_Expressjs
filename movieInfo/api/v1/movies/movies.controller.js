const movieService = require('./movies.service');

const addNewMovie = function (movieObj, done) {
    movieService.addNewMovie(movieObj, done);
}

const getAllMovies = function(done){
    movieService.getAllMovies(done);
}

const findMovieByTitle = function(title, done) {
    movieService.findMovieByTitle(title, done);
}

const editMovieDetails = function(title, done){
    movieService.editMovieDetails(title,done);
}

module.exports = {
    addNewMovie,
    getAllMovies,
    findMovieByTitle,
    editMovieDetails
}