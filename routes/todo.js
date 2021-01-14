const express = require('express');

const todoController = require('../contoller/controller');

const router = express.Router();

router.get('/', todoController.todo);
router.get('/addTodo', todoController.addTodo);
router.post('/addTodo', todoController.postTodo);
router.get('/deleteTodo/:id', todoController.deleteTodo);
router.get('/editTodo', todoController.editTodo);
router.post('/editTodo', todoController.postEditTodo);


module.exports = router;