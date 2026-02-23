🚀 MERN User Management REST API

A production-ready Full Stack User Management System built with the MERN stack (MongoDB, Express, React, Node.js).

This project demonstrates a scalable RESTful API with proper validation, structured architecture, and clean error handling following industry standards.

📌 Features

✅ Create User

✅ Get All Users

✅ Get User By ID

✅ Update User (PUT – Full Update)

✅ Delete User

✅ Zod Schema Validation

✅ Duplicate Email Handling (409 Conflict)

✅ Proper HTTP Status Codes

✅ Clean MVC Architecture

✅ React Frontend Integrated with API

🏗 Tech Stack
🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

Zod (Validation)

dotenv

🔹 Frontend

React.js

Axios

React Router DOM

Vite

📂 Project Structure
mern-user-management-rest-api/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │
│   ├── app.js
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── App.jsx
│
└── README.md
⚙️ Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/sarbjotSingh08/mern-user-management-rest-api.git
cd mern-user-management-rest-api
🔧 Backend Setup
Install Dependencies
cd backend
npm install
Create .env File
PORT=3002
MONGO_URI=your_mongodb_connection_string
Run Backend
npm run dev

Server runs at:

http://localhost:3002
🎨 Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
📡 API Endpoints
Method	Endpoint	Description
POST	/api/users	Create User
GET	/api/users	Get All Users
GET	/api/users/:id	Get Single User
PUT	/api/users/:id	Full Update
DELETE	/api/users/:id	Delete User
🧠 Validation Example
{
  "name": "Sarbjot Singh",
  "age": 23,
  "email": "test@gmail.com"
}

Validation is handled using Zod schema before database insertion.

🚦 HTTP Status Codes Used

201 → Created

200 → Success

204 → Deleted

400 → Validation Error

404 → Not Found

409 → Conflict (Duplicate Email)

500 → Server Error

🔥 Why This Project Is Production-Ready

RESTful architecture

MVC folder structure

Centralized error handling middleware

Async/Await pattern

Schema validation layer

Proper status codes

Clean response structure

📌 Future Improvements

JWT Authentication

Pagination

Filtering & Sorting

Role-Based Authorization

Deployment (Render / Vercel)

Docker Support

👨‍💻 Author

Sarbjot Singh Walia
Aspiring Full Stack MERN Developer

⭐ If you found this project helpful, consider giving it a star!