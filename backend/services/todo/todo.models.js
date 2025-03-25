import mongoose from 'mongoose';

const todoItemSchema = mongoose.Schema({
    id: String,
    name: {
        require: true,
        type: String
    },
    isComplete: Boolean
});

const TodoItem = mongoose.model('Todo_Item', todoItemSchema);

export default TodoItem;
