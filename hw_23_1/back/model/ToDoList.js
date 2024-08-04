const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')

const { Schema } = mongoose;

const todoListSchema = new Schema({
    _id: {
        type: String,
        default: () => uuidv4(),
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;