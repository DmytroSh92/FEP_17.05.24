const express = require('express');
const router = express.Router();
const TodoList = require('./model/TodoList');

router.get("/", async (req, res) => {
    const todoList = await TodoList.find();
    if (!todoList) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todoList);
})

router.get("/:id", async (req, res) => {
    const todoList = await TodoList.findById(req.params.id);
    if (!todoList) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todoList);
})

router.post("/", async (req, res) => {
    const { title, description, isDone } = req.body;
    const newTodo = new TodoList({
        title,
        description,
        isDone: isDone
    });

    try {
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.put("/:id", async (req, res) => {
    const { title, description, isDone } = req.body;

    try {
        const updatedTodo = await TodoList.findByIdAndUpdate(
            req.params.id,
            { title, description, isDone },
            { new: false, runValidators: true }
        )

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json(updatedTodo);
        console.error('Item is updated:', updatedTodo);
    } catch (err) {
        console.error('Error updating todo:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})

router.delete("/:id", async (req, res) => {
    const todoList = await TodoList.findByIdAndDelete(req.params.id);
    if (!todoList) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todoList);
})

module.exports = router;