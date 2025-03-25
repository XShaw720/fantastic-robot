import TodoItem from './todo.models.js';

const fetchAllTodos = async (_, res) => {
    const todoItems = await TodoItem.find();
    res.send({body: todoItems});
};

const createTodo = async (req, res) => {
    const todoItem = await TodoItem.create(req.body);
    res.send({body: todoItem});
};

const updateTodo = async (req, res) => {
    const todoItem = await TodoItem.findOneAndUpdate({id: req.params.id}, req.body, {new: true});
    res.send({body: todoItem});
};

const deleteTodo = async (req, res) => {
    const todoItem = await TodoItem.findByIdAndDelete(req.params.id);
    res.send({body: todoItem});
};

export default {
    fetchAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
