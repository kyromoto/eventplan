const express = require('express');
const bodyParser = require('body-parser');

const API = require('./API_V1');
const SERVER_PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(API);

app.listen(SERVER_PORT, () => console.log("App server is listening on port %s", SERVER_PORT));

module.exports = app;
