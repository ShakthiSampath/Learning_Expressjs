const router = require('express').Router();
const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

router.route('/movies/:movieID')

    .delete(function(req,res){

        Movie.remove({
            _id: req.params.movieID

        },function(err,movie){
            if(err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        })
    })

module.exports = router;