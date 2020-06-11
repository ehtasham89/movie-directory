require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 4000; //http port, can be changed from .env file

app.use(express.json())

app.get('/', (req, res) => {
    res.json(`App server running on port: ${port}!`)
});

app.listen(port)