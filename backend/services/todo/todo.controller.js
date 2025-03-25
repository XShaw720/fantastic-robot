import TodoItem from './todo.models.js';
import { validationResult } from 'express-validator';

const fetchAllTodos = async (_, res) => {
    const todoItems = await TodoItem.find({deletedAt: null});
    res.send({body: todoItems});
};

const createTodo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const todoItem = await TodoItem.create({id: req.body.id, name: req.body.name, isComplete: req.body.isComplete});
    res.send({body: todoItem});
};

const updateTodo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const todoItem = await TodoItem.findOneAndUpdate({id: req.params.id}, req.body, {new: true});
    res.send({body: todoItem});
};

const deleteTodo = async (req, res) => {
    await TodoItem.findOneAndUpdate({id: req.params.id}, {deletedAt: new Date()});
    res.status(204);
};

export default {
    fetchAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
