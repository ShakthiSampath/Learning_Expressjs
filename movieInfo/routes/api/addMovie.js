var router = require('express').Router();
var mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

router.route('/movies')

    .post(function(req,res){

        var movie = new Movie();
        movie.title = req.body.title;
        movie.rating = req.body.rating;
        
        movie.save(function(err){
            if (err)
                res.send(err);

            res.json({message: "Movie created"});
        });
    })

    .get(function(req,res){

        Movie.find(function(err,movies){
            if(err)
                res.send(err);

            res.json(movies)
        })
    });

module.exports = router;