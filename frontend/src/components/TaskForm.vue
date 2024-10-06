<template>
    <div class="mb-4">
      <h2 class="text-2xl font-semibold mb-2">Add New Task</h2>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-bold mb-2" for="title">Title</label>
          <input 
            type="text" 
            v-model="task.title" 
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Task title" 
            required 
          />
          <span v-if="titleError" class="text-red-500 text-sm">{{ titleError }}</span>
        </div>
  
        <div>
          <label class="block text-sm font-bold mb-2" for="description">Description</label>
          <textarea 
            v-model="task.description" 
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Task description" 
            required
          ></textarea>
          <span v-if="descriptionError" class="text-red-500 text-sm">{{ descriptionError }}</span>
        </div>
  
        <button 
          type="submit" 
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Add Task
        </button>
        <div v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import TaskService from '../services/TaskService';
  
  export default {
    data() {
      return {
        task: {
          title: '',
          description: ''
        },
        titleError: '',
        descriptionError: '',
        successMessage: ''
      };
    },
    methods: {
      async onSubmit() {
        this.clearErrors();
        let valid = true;
  
        // Basic validation
        if (!this.task.title) {
          this.titleError = "Title is required.";
          valid = false;
        }
        if (!this.task.description) {
          this.descriptionError = "Description is required.";
          valid = false;
        }
  
        if (valid) {
          try {
            await TaskService.createTask(this.task);
            this.$emit('task-added');  // Emit event to parent component to refresh task list
            this.successMessage = "Task added successfully!"; // Success message
            this.task = { title: '', description: '' };  // Clear form
          } catch (error) {
            console.error("Failed to add task:", error);
          }
        }
      },
      clearErrors() {
        this.titleError = '';
        this.descriptionError = '';
        this.successMessage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  