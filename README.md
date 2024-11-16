# ContactHub

ContactHub is a contact management application built using ReactJS for the frontend and Node.js for the backend. It provides CRUD functionality for managing contacts, with Material UI (MUI) enhancing the user interface. The application enables users to view, add, edit, and delete contacts, making it easy to keep track of essential contact information.

## Features

- **Home Page with Navigation**: A well-designed homepage provides easy access to core features, including viewing and adding contacts, all accessible from the navigation bar.
- **Navigation Bar**: A persistent navigation bar enables smooth transitions between "Home," "View Contacts," and "Add Contact" pages.
- **CRUD Operations**: Create, read, update, and delete contact entries.
- **Sorting and Pagination**: Sort contacts by different fields and navigate through pages.
- **Error Handling**: Displays error messages to handle failed API calls or other issues.

- **Error Handling**: Displays error messages to handle failed API calls or other issues.

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (for storing contact information)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/divyanshucodes20/ContactHub-A-Contact-Management-App.git
cd ContactHub-A-Contact-Management-App
2. Set Up Backend
Navigate to the backend directory:


cd backend
Install backend dependencies:


npm install
Create a .env file in the backend directory with the following content to configure environment variables:



PORT=3000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=*
Start the backend server (using Nodemon for automatic restarts on file changes):

First, install nodemon if you haven't already:


npm install -g nodemon
Start the backend server:

npm run dev
Tip: Nodemon is configured to automatically restart the server on file changes, making development smoother.

3. Set Up Frontend
Navigate to the frontend directory:


cd ../frontend
Install frontend dependencies:


npm install
Start the frontend development server:


npm run dev
Accessing the Application
Backend: Runs on http://localhost:3000
Frontend: Runs on http://localhost:3001
Usage
View Contacts: Displays a paginated and sortable list of all contacts.
Add Contact: Click on "Add Contact" to add new contact information.
Edit Contact: Edit existing contact details by clicking the "Edit" button.
Delete Contact: Delete a contact entry by using the "Delete" button.
Database Schema
Contact Schema (MongoDB)
The MongoDB schema for storing contact information:


{
  "_id": "ObjectId",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "jobTitle": "string"
}
Additional Dependencies and Installation Commands
Backend Dependencies:

express: Simplifies building the REST API.

mongoose: Manages MongoDB interactions.

dotenv: Loads environment variables from .env.

cors: Handles Cross-Origin Resource Sharing.

Install Backend Dependencies:

npm install express mongoose dotenv cors body-parser cookie-parser validator
Frontend Dependencies:

@emotion/react and @emotion/styled: Adds theming/styling with Material UI.

@mui/material: Provides pre-styled Material UI components.

axios: Handles API requests.

react-router-dom: Manages frontend routing.

Install Frontend Dependencies:

npm install @emotion/react @emotion/styled @mui/material axios react-router-dom styled-components
package.json References
Backend package.json

{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },
  "dependencies": {
    "body-parser": "^1.20.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mongoose": "^8.8.1",
    "validator": "^13.12.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.7",
    "prettier": "^3.3.3"
  }
}
Frontend package.json

{
  "name": "contacthub",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/material": "^6.1.7",
    "@mui/styled-engine-sc": "^6.1.7",
    "axios": "^1.7.7",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "styled-components": "^6.1.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
}
```
##Challenges and Solutions
Challenge: Integrating Material UI (MUI) Components
Implementing MUI for the first time presented challenges due to its unique component structure and styling. After consulting MUI documentation and examples, I was able to configure and implement MUI components, such as tables, pagination, and dialogs, effectively.

