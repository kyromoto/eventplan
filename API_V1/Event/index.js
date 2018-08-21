const Router = require('express').Router();

Router.use('/event', require('./Event.Routes'));

module.exports = Router;