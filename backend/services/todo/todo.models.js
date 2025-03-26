import mongoose from 'mongoose';

const todoItemSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
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
