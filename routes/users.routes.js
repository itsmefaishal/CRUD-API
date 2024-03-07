const express = require('express');
const routes = express.Router();
const User = require('../models/user.model');
const {getUser, getUsers, putUser, deleteUser, postUser} = require('../controller/users.controller');

routes.get('/', getUsers);

routes.get('/:id', getUser);

routes.post('/', postUser);

routes.put('/:id', putUser);

routes.delete('/:id', deleteUser);

module.exports = routes;
