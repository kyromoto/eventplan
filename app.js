'use strict';

const http = require('http');

const express    = require('express'),
      bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/',    require('./client'));
app.use('/api', require('./api'));

const server = http.createServer(app);

server.listen(config.server.port, () => {
  console.log(`Server is listening on port ${config.server.port}`);
});
