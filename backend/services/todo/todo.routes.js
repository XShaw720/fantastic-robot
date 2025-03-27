import express from 'express';
import todoController from './todo.controller.js';
import {todoValidator, errorHandler} from './todo.validator.js';

const router = express.Router();

router.get('/', errorHandler(todoController.fetchAllTodos));
router.post('/', todoValidator, errorHandler(todoController.createTodo));
router.put('/:id', todoValidator, errorHandler(todoController.updateTodo));
router.delete('/:id', errorHandler(todoController.deleteTodo));

export default router;
