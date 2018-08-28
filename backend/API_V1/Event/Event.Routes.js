const Router = require('express').Router();

const eventController = require('./Event.Controller');

Router.route('/event')
    .get(eventController.listEvents)
    .post(eventController.createEvent);

Router.route('/event/:id')
    .get(eventController.getEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);

module.exports = Router;