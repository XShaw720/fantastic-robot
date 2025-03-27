import TodoItem from './todo.models.js';
import TodoMapper from './todo.mapper.js';

const fetchAllTodos = async (_, res) => {
    const todoItems = await TodoItem.find({deletedAt: null});
    res.send({body: todoItems.map(TodoMapper.toDto)});
};

const createTodo = async (req, res) => {
    const todoItem = await TodoItem.create(TodoMapper.fromCreateRequest(req.body));
    res.status(201).send({body: TodoMapper.toDto(todoItem)});
};

const updateTodo = async (req, res) => {
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
