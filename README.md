# To-do List Application

This is a simple To-do List application built using Vue.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. The application allows users to create, read, update, and delete tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Testing the Application](#testing-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new tasks.
- View all tasks.
- Update task status (mark as complete).
- Delete tasks.

## Technologies Used

- **Frontend**: Vue.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **HTTP Client**: Axios

## Setup

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app/backend


## Install the required dependencies:

``` npm install```


## Set up MongoDB:

1. Make sure you have MongoDB installed and running on your machine. 
2. Create a .env file in the backend directory and add your MongoDB connection string:

  ``` MONGODB_URI=mongodb://localhost:27017/todo-app```

## Run the server:

``` node server.js```


The server will run on ```http://localhost:5000``` by default.

### Frontend Setup

1. Navigate to the frontend directory :
```cd ../frontend ```

2. Install the required dependencies :
```npm install```

3. Run the Vue application :
```npm run serve```

The application will be available at ```http://localhost:8080```

### Running the Application
1. Start the backend server by running ```node server.js``` in the backend directory.
2. Start the frontend application by running ```npm run serve``` in the frontend directory.
3. You should now be able to access the application in your web browser at ```http://localhost:8080```

### Testing the Application

##Adding a Task:
<ul>
<li>Enter a title and description in the form and click Add Task.
Viewing Tasks:</li>

<li>All tasks should be displayed in the list.
Updating a Task:</li>

<li>Click the Complete button to mark a task as completed.
Deleting a Task:</li>

<li>Click the Delete button to remove a task from the list.</li>
</ul>
