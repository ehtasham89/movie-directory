var express = require('express');

var routes = function(user){
    var userRouter = express.Router();
    
    var userController = require('./../controller/userController');
        userController = new userController(user); //pass user model to user controller

    //login route
    userRouter.route('/')
        .post(userController.register);

    return userRouter;
};

module.exports = routes;