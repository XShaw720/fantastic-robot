import express from 'express';
import todoController from './todo.controller.js';

const router = express.Router();

router.get('/', todoController.fetchAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
