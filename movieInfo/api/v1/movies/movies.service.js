const MoviesModel = require('./movies.entity');

const addNewMovie = function (movieObj, done) {
    let movie = new MoviesModel();
    movie.title = movieObj.title;
    movie.rating = movieObj.rating;

    movie.save(function (err, result) {
        if (err) {
            console.log("Error in saving movies data: ", err);
            done(err);
            return;
        }
        let resultObj = { title: result.title, rating: result.rating };
        done(null, resultObj);
    });
}

const getAllMovies = function(done){
    MoviesModel.find({_id: 0, __v:0}, function(err,movies){
        if(err){
            console.log("Error in finding movies: ", err);
            done(err);
            return;
        }
        done(null, movies);
    });
}

const findMovieByTitle = function(title, done) {
    MoviesModel.find({title}, {_id: 0, __v:0}, function (err, movieColln) {
        if (err) {
            console.log("Error in finding movie: ", err);
            done(err);
            return;
        }
        done(null, movieColln);
    });
}

module.exports = {
    addNewMovie,
    findMovieByTitle
}