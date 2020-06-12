const jwt = require('jsonwebtoken');

var authenticateToken = function(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
console.log("tokentokentokentokentoken", token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      
      if (err) return res.sendStatus(403);

      req.user = user

      next();
    });
}

module.exports = authenticateToken;