const Router = require('express').Router();

const eventController = require('./Event.Controller');

Router.get('', eventController.eventList);

Router.post('', eventController.notImplemented);
Router.get('/:id', eventController.notImplemented);
Router.put('/:id', eventController.notImplemented);
Router.delete('/:id', eventController.notImplemented);

module.exports = Router;