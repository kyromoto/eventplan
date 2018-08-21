const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const API = require('./API_V1');
const SERVER_PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(API);

db.connection.once('open', () => app.listen(SERVER_PORT, () => console.log("App server is listening on port %s", SERVER_PORT)));

module.exports = app;