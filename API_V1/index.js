const Router = require('express').Router();

const USER = require('./User');

const BASE_URL = '/v1';

Router.use(BASE_URL, USER);

module.exports = Router;