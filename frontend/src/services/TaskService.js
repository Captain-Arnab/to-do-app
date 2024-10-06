import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export default {
  // Fetch all tasks
  getAllTasks() {
    return axios.get(API_URL);
  },
  
  // Create a new task
  createTask(task) {
    return axios.post(API_URL, task);
  },

  // Update an existing task
  updateTask(id, task) {
    return axios.put(`${API_URL}/${id}`, task);
  },

  // Delete a task
  deleteTask(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
