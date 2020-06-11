const jwt = require('jsonwebtoken');
const cache = require( "./../../services/cache.js" );

class authController {
    /*
     * user authentication controller with JSON Web Token
    */
    constructor(auth) {
        this.authModel = auth;
        this.appCache = new cache(process.env.CACHE_TIME || 3600);
        this.refreshTokenCache = "jwtRefreshTokens";
        this.tokenExpiry = '15s';

        //refresh token for retrive access token
        this.refreshTokens = [this.appCache.get(this.refreshTokenCache)];
    }

    //get new access token with refresh token
    refreshToken = (req, res) => {
        try {
            const refreshToken = req.body.token

            if (refreshToken == null) return res.sendStatus(401);

            if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.sendStatus(403)

                const accessToken = this.generateAccessToken({ name: user.name })

                res.json({ accessToken: accessToken })
            });
        } catch (e) {
            res.sendStatus(500);
        }
    };

    //delete token refresh token and access token
    logout = (req, res) => {
        this.appCache.del(this.refreshTokenCache);

        res.sendStatus(204);
    };

    //login to get access token and refresh token
    login = (req, res) => {
        // Authenticate User
        try {
            const username = req.body.username
            const user = { name: username }

            const accessToken = this.generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            
            this.appCache.set(this.refreshTokenCache, refreshToken);

            res.json({ accessToken: accessToken, refreshToken: refreshToken });
        } catch (e) {
            res.sendStatus(500);
        } 
    };

    //generate new access token
    generateAccessToken = (user) => {
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: this.tokenExpiry })
    }
}

module.exports = authController;
  