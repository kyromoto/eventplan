const Router = require('express').Router();

const userController = require('./User.Controller');

Router.route('/user')
    .get(userController.listUsers)
    .post(userController.postUser);

Router.route('/user/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

Router.route('/user/test')
    .get((req, res) => res.json({status : 'OK'}));

module.exports = Router;