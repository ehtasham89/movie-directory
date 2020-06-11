//middlewares
var jwtVerified = require('./http/middleware/jwt');

//all routes
var authRouter = require('./http/routes/authRutes');
var userRouter = require('./http/routes/userRoutes');
var movieRouter = require('./http/routes/movieRoutes');

//app init
var init = function(app, port) {
    var auth = {};
    var user = {};
    var movie = {};

    //default route
     app.get('/', (req, res) => {
        res.json(`App server running on port: ${port}!`)
    });

    //login | logout | JWT routes
    app.use('/api/login', authRouter(auth));

    //========= Protected Routes =========\\
    //user routes
    app.use('/api/users', jwtVerified, userRouter(user));
    //movie routes
    app.use('/api/movies', movieRouter(movie));
}

module.exports = init;