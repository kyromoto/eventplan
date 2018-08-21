const Router = require('express').Router();

const userController = require('./User.Controller');

Router.get('', userController.userList);

Router.post('', userController.userCreate);
Router.get('/:id', userController.userDetails);
Router.put('/:id', userController.userUpdate);
Router.delete('/:id', userController.userDelete);

module.exports = Router;