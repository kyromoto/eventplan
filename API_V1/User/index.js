const Router = require('express').Router();

Router.use('/user', require('./User.routes'));

module.exports = Router;