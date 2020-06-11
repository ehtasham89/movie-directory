const jwt = require('jsonwebtoken');
const cache = require( "./../../services/cache.js" );

const appCache = new cache(process.env.CACHE_TIME || 3600);
const refreshTokenCache = "jwtRefreshTokens";

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      
      if (err) return res.sendStatus(403);

      req.user = user

      next();
    });
}

let refreshTokens = [appCache.get(refreshTokenCache)];

app.post('/refresh-token', (req, res) => {
  const refreshToken = req.body.token

  if (refreshToken == null) return res.sendStatus(401);

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)

    const accessToken = generateAccessToken({ name: user.name })

    res.json({ accessToken: accessToken })
  });
})

app.delete('/logout', (req, res) => {
    appCache.del(refreshTokenCache);

    res.sendStatus(204);
})

app.post('/login', (req, res) => {
  // Authenticate User

  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  
  appCache.set(refreshTokenCache, refreshToken);

  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

export function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}
  