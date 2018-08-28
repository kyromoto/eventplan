const Router = require('express').Router();

const USER = require('./User');
const EVENT = require('./Event');

const USER_AUTH = require('./User/User.Auth');

const NODE_ENV = process.env.NODE_ENV;
const BASE_URL = '/v1';


Router.use(BASE_URL, USER_AUTH.login);

//enable route auth if in production mode
if(NODE_ENV == 'production') {
    Router.use(BASE_URL, USER_AUTH.checkAuth);
}

Router.use(BASE_URL, USER);
Router.use(BASE_URL, EVENT);

module.exports = Router;