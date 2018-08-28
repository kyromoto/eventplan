const Router = require('express').Router();

const eventController = require('./Event.Controller');

Router.route('/events')
    .get(eventController.listEvents)
    .post(eventController.createEvent);

Router.route('/events/:id')
    .get(eventController.getEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);

module.exports = Router;