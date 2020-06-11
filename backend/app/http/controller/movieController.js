const jwt = require('jsonwebtoken');

class authController {
    /*
     * movie authentication controller with JSON Web Token
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
  