const express = require('express');
const Task = require('../models/taskModel'); // Path to your model
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error creating task', error: err.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching tasks', error: err.message });
    }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching task', error: err.message });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error updating task', error: err.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting task', error: err.message });
    }
});

module.exports = router;
