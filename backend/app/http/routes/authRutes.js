var express = require('express');

var routes = function(auth){
    var authRouter = express.Router();
    
    var authController = require('./../controllers/authController');
        authController = new authController(auth); //pass auth model to auth controller

    //login route
    authRouter.post('/login', authController.login);
        
    //get refresh route
    authRouter.post('/refresh-token', authController.refreshToken);

    //logout route
    authRouter.get('/logout', authController.logout);

    return authRouter;
};

module.exports = routes;