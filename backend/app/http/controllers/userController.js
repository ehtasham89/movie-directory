const jwt = require('jsonwebtoken');

class authController {
    /*
     * user authentication controller with JSON Web Token
    */
    constructor(user) {
        this.userModel = user;
    }

    //register new user
    register = (req, res) => {
        res.json({ username: "ali", email: "ali@gmail.com" });
    };
}

module.exports = authController;
  