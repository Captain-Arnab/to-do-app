require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./backend/routes/taskRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
