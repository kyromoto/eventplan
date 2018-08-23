const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const API = require('./API_V1');
const SERVER_PORT = process.env.PORT || 8080;

const app = express();

//enable possibillity to parse json request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//load API
app.use(API);

let initCallback;

db.initDB(() => {
    app.listen(SERVER_PORT, () => {
        console.log("App server is listening on port %s", SERVER_PORT);
        if(initCallback) initCallback(app);
    });
});

exports.setInitAppCallback = (testCallback) => initCallback = testCallback;