var express = require('express');

var routes = function(auth){
    var authRouter = express.Router();
    
    var authController = require('./../controller/authController');
        authController = new authController(auth); //pass auth model to auth controller

    //login route
    authRouter.route('/')
        .post(authController.login);
        
    //get refresh route
    authRouter.route('/refresh-token')
        .get(authController.logout);

    //logout route
    authRouter.route('/logout')
        .get(authController.logout);

    return authRouter;
};

module.exports = routes;