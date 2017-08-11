const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/movies', function (err, db) {
    if (err) {
        throw err;
    }
});

app.use('/api/v1', require('./api/v1'));

app.use((req, res) => {
    res.status(404).send("Resource not found");
});

// router.use(function(req,res,next){
//     console.log('App in progress....');
//     next();
// });

// router.route('/movies')

//     .post(function(req,res){

//         var movie = new Movie();
//         movie.title = req.body.title;
//         movie.rating = req.body.rating;
        
//         movie.save(function(err){
//             if (err)
//                 res.send(err);

//             res.json({message: "Movie created"});
//         });
//     })

//     .get(function(req,res){

//         Movie.find(function(err,movies){
//             if(err)
//                 res.send(err);

//             res.json(movies)
//         })
//     });


// router.route('/movies/:movieID')

//     .get(function(req,res){
//         Movie.findById(req.params.movieID, function(err, movie){
//             if (err) 
//                 res.send(err);

//             res.json(movie)
//         })
//     })

//     .patch(function(req,res){

//         Movie.findById(req.params.movieID, function(err, movie){
//             if (err) 
//                 res.send(err);

//             movie.rating = req.body.rating;

//             movie.save(function(err){
//             if (err)
//                 res.send(err);

//             res.json({message: "Movie updated"});
//            })

//         })
//     })

//     .delete(function(req,res){

//         Movie.remove({
//             _id: req.params.movieID

//         },function(err,movie){
//             if(err)
//                 res.send(err);

//             res.json({message: 'Successfully deleted'});
//         })
//     })

// app.use(require('./routes'));

// app.use('/api',router);


app.listen(port);
console.log('Application is running on ', port);