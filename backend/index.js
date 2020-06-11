require('dotenv').config()

const express = require('express');
const app = express();
const initApp = require('./app');

const port = process.env.PORT || 4000; //http port, can be changed from .env file

app.use(express.json())

initApp(app, port); //bootstrap application

app.listen(port)