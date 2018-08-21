const Router = require('express').Router();

const USER = require('./User');
const EVENT = require('./Event');

const BASE_URL = '/v1';

Router.use(BASE_URL, USER);
Router.use(BASE_URL, EVENT);

module.exports = Router;