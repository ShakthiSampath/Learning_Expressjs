const router = require('express').Router();
const moviesCtrlr = require('./movies.controller');
 
//Effective URL is POST /movies
router.post('/',function(req, res) {
   try{
       moviesCtrlr.addNewMovie(req.body, (err, result) => {
           if(err) {
               res.status(500).send({error: "Internal error in processing, plese try later..!"});
               return;
           }

           res.send(result);
           return;
       })
   } catch (err) {
       console.log("Error in route /movies, error: ", err);
       res.status(500).send({error: "Internal error occurred, plese try again later..!"})
   } 
});

router.get('/:title', (req, res) => {
    try{
       moviesCtrlr.findMovieByTitle(req.params.title, (err, result) => {
           if(err) {
               res.status(500).send({error: "Internal error in processing, plese try later..!"});
               return;
           }

           res.send(result);
           return;
       })
   } catch (err) {
       console.log("Error in route /movies, error: ", err);
       res.status(500).send({error: "Internal error occurred, plese try again later..!"})
   }
})

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

// app.get('/',function(req,res){
//     res.json({message: "Welcome to MovieInfo App!"});
// });

module.exports = router;