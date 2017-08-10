const router = require('express').Router();
const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

router.route('/movies/:movieID')

    .get(function(req,res){
        Movie.findById(req.params.movieID, function(err, movie){
            if (err) 
                res.send(err);

            res.json(movie)
        })
    });

module.exports = router;