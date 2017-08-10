const router = require('express').Router();
const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

router.route('/movies/:movieID')
    .patch(function(req,res){

        Movie.findById(req.params.movieID, function(err, movie){
            if (err) 
                res.send(err);

            movie.rating = req.body.rating;

            movie.save(function(err){
            if (err)
                res.send(err);

            res.json({message: "Movie updated"});
           })

        })
    })

module.exports = router;