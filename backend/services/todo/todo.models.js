import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema(
    {
        id: {
            require: true,
            type: String
        },
        name: {
            require: true,
            type: String
        },
        isComplete: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    },
    { timestamps: true }
);

const TodoItem = mongoose.model('Todo_Item', todoItemSchema);

export default TodoItem;
