var express = require('express');

var routes = function(comments){
    var commentsRouter = express.Router();
    
    var commentsController = require('./../controllers/commentsController');
        commentsController = new commentsController(comments); //pass user model to user controller

    //login route
    commentsRouter.post('/', commentsController.create);

    return commentsRouter;
};

module.exports = routes;