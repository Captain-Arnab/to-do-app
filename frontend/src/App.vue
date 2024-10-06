<template>
  <div class="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold mb-6 text-center text-blue-600">Vue.js To-Do App</h1>

    <TaskForm @task-added="refreshTaskList" />

    <TaskList ref="taskList" @error="showError" />

    <!-- Optional Footer Section -->
    <footer class="mt-6 text-center text-gray-600">
      <p>© 2024 Your Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList
  },
  methods: {
    // To refresh the task list after adding a new task
    refreshTaskList() {
      this.$refs.taskList.fetchTasks();
    },
    showError(message) {
      alert(message); // You can replace this with a more user-friendly UI alert
    }
  }
};
</script>

<style>
/* Add global styles if needed */
body {
  background-color: #f3f4f6; /* Light gray background for the whole app */
}

h1 {
  font-family: 'Arial', sans-serif; /* Consistent font family for headings */
}
</style>
