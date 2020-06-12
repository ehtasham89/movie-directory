//middlewares
var jwtProtected = require('./http/middleware/jwt');

//all routes
var authRouter = require('./http/routes/authRutes');
var userRouter = require('./http/routes/userRoutes');
var movieRouter = require('./http/routes/movieRoutes');
var commentRouter = require('./http/routes/commentRoutes');

//models
var db = require("./models");

//app init
var init = function(app, port) {
    var users = db.users || {};
    var movies = db.movies || {};
    var comments = db.comments || {};

    //default route
     app.get('/', (req, res) => {
        res.json(`App server running on port: ${port}!`)
    });

    //login | logout | JWT routes
    app.use('/api/auth', authRouter(users));

    //========= Protected Routes with JWT Middleware (jwtProtected) =========\\
    //user routes
    app.use('/api/users', jwtProtected, userRouter(users));
    //movie routes
    app.use('/api/movies', jwtProtected, movieRouter(movies));
    //comments route
    app.use('/api/comments', jwtProtected, commentRouter(comments));

    db.sequelize.sync(); //sync({force: process.env.NODE_ENV === "development"})
}

module.exports = init;