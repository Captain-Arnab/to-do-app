<template>
    <div class="task-list">
      <h2 class="text-2xl font-semibold mb-4">Tasks</h2>
  
      <!-- Loading State -->
      <div v-if="loading" class="text-gray-500">Loading tasks...</div>
  
      <!-- Check if there are no tasks -->
      <div v-else-if="tasks.length === 0" class="text-gray-500">
        No tasks available.
      </div>
  
      <!-- Render each task -->
      <ul v-else>
        <li v-for="task in tasks" :key="task._id" class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <input 
              type="checkbox" 
              v-model="task.completed" 
              @change="updateTask(task)"
              class="mr-2"
            />
            <span :class="{ 'line-through text-gray-500': task.completed }">
              {{ task.title }} - {{ task.description }}
            </span>
          </div>
  
          <button 
            @click="deleteTask(task._id)" 
            class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Delete
          </button>
        </li>
      </ul>
  
      <!-- Error Message -->
      <div v-if="error" class="text-red-500 mt-4">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  import TaskService from '../services/TaskService';
  
  export default {
    data() {
      return {
        tasks: [],
        loading: true,  // New loading state
        error: null     // New error state
      };
    },
    created() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        this.loading = true;  // Set loading to true when fetching
        try {
          const response = await TaskService.getAllTasks();
          this.tasks = response.data;
        } catch (error) {
          this.error = "Failed to fetch tasks. Please try again.";  // Set error message
          console.error("Failed to fetch tasks:", error);
        } finally {
          this.loading = false;  // Set loading to false after fetch
        }
      },
  
      async updateTask(task) {
        try {
          await TaskService.updateTask(task._id, task);
        } catch (error) {
          this.error = "Failed to update task. Please try again.";  // Set error message
          console.error("Failed to update task:", error);
        }
      },
  
      async deleteTask(id) {
        try {
          await TaskService.deleteTask(id);
          this.tasks = this.tasks.filter(task => task._id !== id);  // Update the local state
        } catch (error) {
          this.error = "Failed to delete task. Please try again.";  // Set error message
          console.error("Failed to delete task:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .line-through {
    text-decoration: line-through;
  }
  </style>
  