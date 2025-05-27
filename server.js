const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow Vite frontend
app.use(express.json()); // Parse JSON bodies

// In-memory task store
let tasks = [];
let currentId = 1;

// GET /tasks - return all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - add a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (!task || task.trim() === '') {
    return res.status(400).json({ error: 'Task cannot be empty' });
  }

  const newTask = {
    id: currentId++,
    task: task.trim(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
