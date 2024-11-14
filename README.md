ContactHub - A Contact Management Application
ContactHub is a full-stack contact management application built with ReactJS (Material UI) on the frontend and NodeJS on the backend. This project supports CRUD operations for managing contact information, including details like names, emails, phone numbers, company, and job title.

Features
Create: Add new contacts with validation checks.
Read: View all contacts with pagination and sorting functionality.
Update: Edit existing contact information.
Delete: Remove contacts from the list.
Technologies Used
Frontend: ReactJS, Material UI
Backend: NodeJS, ExpressJS
Database: MongoDB
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/divyanshucodes20/ContactHub-A-Contact-Management-App
cd ContactHub-A-Contact-Management-App
Install dependencies:

For backend:
bash
Copy code
cd backend
npm install
For frontend:
bash
Copy code
cd ../frontend
npm install
Database Configuration:

Ensure MongoDB is installed and running on your local machine or available on a cloud service.
Create a .env file in the backend directory with the following:
makefile
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=3000
Run the Application:

Start the backend server:
bash
Copy code
cd backend
npm start
Start the frontend development server:
bash
Copy code
cd ../frontend
npm start
Database Schema:

The MongoDB schema for contacts:
js
Copy code
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: String,
  jobTitle: String
});
Project Overview
Frontend
The frontend is built with ReactJS and styled using Material UI. The main components are:

ViewContacts: Displays all contacts in a paginated, sortable table.
ContactForm: Form for creating and editing contacts with client-side validation.
ContactAPI: Handles CRUD operations by interacting with the backend API.
Backend
The backend uses ExpressJS and MongoDB to handle data storage and retrieval. Key features include:

addContact: API endpoint to create a new contact.
getContacts: API endpoint to fetch all contacts.
updateContact: API endpoint to update an existing contact.
deleteContact: API endpoint to delete a contact.
Major Technical Decisions
Material UI: Chosen for consistent, responsive design.
Axios: Used for API requests between frontend and backend.
MongoDB: Selected for flexibility and ease of use with JSON-like data structures.
Challenges and Solutions
Challenge: Learning Material UI
This was my first time using Material UI, and adapting to its component-based structure and styling was initially challenging. I addressed this by studying the official documentation and experimenting with different components and layouts to achieve the required functionality and design.