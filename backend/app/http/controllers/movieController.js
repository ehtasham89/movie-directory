const jwt = require('jsonwebtoken');

class authController {
    /*
     * movie controller
    */
    constructor(movie) {
        this.movieModel = movie;
    }

    //register new movie
    register = (req, res) => {
        res.json({ moviename: "ali", email: "ali@gmail.com" });
    };
}

module.exports = authController;
  