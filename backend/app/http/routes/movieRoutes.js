var express = require('express');

var routes = function(movie){
    var movieRouter = express.Router();
    
    var movieController = require('./../controllers/movieController');
        movieController = new movieController(movie); //pass movie model to movie controller

    //register new user
    movieRouter.get('/', movieController.register);

    return movieRouter;
};

module.exports = routes;