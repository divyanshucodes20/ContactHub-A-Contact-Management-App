# ContactHub

ContactHub is a contact management application built using ReactJS for the frontend and NodeJS for the backend. It provides CRUD functionality for managing contacts, with Material UI (MUI) enhancing the user interface. The application enables users to view, add, edit, and delete contacts, making it easy to keep track of essential contact information.

## Features

- **CRUD Operations**: Create, read, update, and delete contact entries.
- **Sorting and Pagination**: Sort contacts by different fields and navigate through pages.
- **Responsive Design**: Built using Material UI for a modern, responsive interface.
- **Error Handling**: Displays error messages to handle failed API calls or other issues.

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (for storing contact information)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/divyanshucodes20/ContactHub-A-Contact-Management-App.git
cd ContactHub-A-Contact-Management-App


2. Install dependencies
Backend
Navigate to the backend directory:

bash
Copy code
cd backend
npm install
Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
npm install
3. Set up MongoDB
Make sure you have MongoDB installed and running. Create a database for this project and update the MongoDB URI in the backend configuration.

4. Configure environment variables
Create a .env file in the backend directory with the following environment variables:

plaintext
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
5. Start the project
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
The application should now be running on http://localhost:3000 (backend) and http://localhost:3001 (frontend).

Usage
View Contacts: View a paginated and sortable list of all contacts.
Add a Contact: Use the "Add Contact" button to add a new contact entry.
Edit a Contact: Click "Edit" next to any contact to modify details.
Delete a Contact: Use the "Delete" button to remove a contact.
Database Schema
The database schema for a contact document in MongoDB:

json
Copy code
{
  "_id": "ObjectId",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "jobTitle": "string"
}
Challenges and Solutions
Challenge: Using Material UI (MUI)
This project involved working with Material UI for the first time. Learning its component structure and styling methods was a bit challenging, especially for creating a responsive and modern UI. After experimenting with the MUI documentation and examples, I was able to implement table sorting, pagination, and dialogs effectively.