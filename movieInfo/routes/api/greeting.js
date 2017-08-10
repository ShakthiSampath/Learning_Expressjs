var router = require('express').Router();
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

router.get('/',function(req,res){
    res.json({message: "Welcome to MovieInfo App!"});
});

module.exports = router;