//app init
var init = function(app, port) {
    var auth = {};

    authRouter = require('./http/routes/authRutes')(auth);

    app.use('/api/login', authRouter);

    app.get('/', (req, res) => {
        res.json(`App server running on port: ${port}!`)
    });
}

module.exports = init;