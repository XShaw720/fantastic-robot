import TodoItem from './todo.models.js';
import TodoMapper from './todo.mapper.js';
import { validationResult } from 'express-validator';

const fetchAllTodos = async (_, res) => {
    const todoItems = await TodoItem.find({deletedAt: null});
    res.send({body: todoItems.map(TodoMapper.toDto)});
};

const createTodo = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const todoItem = await TodoItem.create(TodoMapper.fromCreateRequest(req.body)).catch(next);
        res.send({body: TodoMapper.toDto(todoItem)});
    } catch(error){
        next(error)
    }
};

const updateTodo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const todoItem = await TodoItem.findOneAndUpdate({id: req.params.id}, TodoMapper.fromUpdateRequest(req.body), {new: true});
    res.send({body: TodoMapper.toDto(todoItem)});
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
