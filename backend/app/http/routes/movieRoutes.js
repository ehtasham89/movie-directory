var express = require('express');

var routes = function(movie){
    var movieRouter = express.Router();
    
    var movieController = require('./../controller/movieController');
        movieController = new movieController(movie); //pass movie model to movie controller

    //login route
    movieRouter.route('/')
        .get(movieController.register);

    return movieRouter;
};

module.exports = routes;