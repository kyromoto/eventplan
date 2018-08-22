const Router = require('express').Router();

const eventController = require('./Event.Controller');

Router.get('', eventController.eventList);
Router.get('/:id', eventController.eventDetails);

Router.post('', eventController.eventCreate);
Router.put('/:id', eventController.eventUpdate);
Router.delete('/:id', eventController.eventDelete);

module.exports = Router;