import express from 'express';
import {body} from 'express-validator';
import todoController from './todo.controller.js';

const router = express.Router();

const validator = [
    body("id").exists().isString().notEmpty(),
    body("name").exists().isString().notEmpty(),
    body("isComplete").optional().isBoolean()
]

router.get('/', todoController.fetchAllTodos);
router.post('/', validator, todoController.createTodo);
router.put('/:id', validator, todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
