# Contact Management System

Contact Management System is a full-stack application with a React frontend and a Node.js + Express backend for managing contacts, utilizing MongoDB for storage.

## Frontend Installation

Use the package manager **npm** or **yarn** to set up the frontend.

### Steps to Install and Run Frontend

```bash
# Clone the repository
https://github.com/rajashekar6355/ContentManagement.git

# Navigate to the frontend directory
cd ContentManagment

# Install the dependencies
npm install

# Start the development server
npm run dev

```
## Backend Installation

Make sure you have **Node.js** and **MongoDB** installed.

### Steps to Install and Run Backend

```bash
# Navigate to the backend directory
cd ContentManagementBackend

# Install the dependencies
npm install

#Inside the .env file, add the following configuration:
MONGO_URI=your_mongodb_connection_url_here
PORT=5000

#Replace mongodb://localhost:27017/contact_management with your MongoDB connection string.

# Start the server
node server.js
```
## Frontend Configuration
To configure the frontend API endpoint, update the API URL in src/services/ContactServices.js:
```bash
const API_URL = "http://localhost:5000";

