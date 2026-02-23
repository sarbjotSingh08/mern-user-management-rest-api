# 🚀 User Management System (Industry-Level CRUD API)

A full-stack User Management application built using Node.js, Express, MongoDB, and React.

This project demonstrates a production-ready REST API with proper validation, error handling, and clean architecture.

---

## 📌 Features

- ✅ Create User
- ✅ Get All Users
- ✅ Get User By ID
- ✅ Update User (PUT - full update)
- ✅ Delete User
- ✅ Zod Validation
- ✅ Proper HTTP Status Codes
- ✅ Duplicate Email Handling (409)
- ✅ Clean MVC Architecture
- ✅ React Frontend Connected to API

---

## 🏗 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod (Validation)
- dotenv

### Frontend
- React.js
- Axios
- React Router DOM

---

## 📂 Project Structure

```
project-root/
│
├── backend/
|----|---src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├─app.js
│   └─index.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/user-management-system.git
cd user-management-system
```

---

## 🔧 Backend Setup

### Install Dependencies

```bash
cd backend
npm install
```

### Create `.env` File

```
PORT=3002
MONGO_URI=your_mongodb_connection_string
```

### Run Backend

```bash
npm run dev
```

Server runs on:
```
http://localhost:3002
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /api/users | Create User |
| GET    | /api/users | Get All Users |
| GET    | /api/users/:id | Get Single User |
| PUT    | /api/users/:id | Full Update |
| DELETE | /api/users/:id | Delete User |

---

## 🧠 Validation Example

```json
{
  "name": "Sarbjot Singh",
  "age": 23,
  "email": "test@gmail.com"
}
```

Validation is handled using **Zod schema** before database insertion.

---

## 🚦 HTTP Status Codes Used

- 201 → Created
- 200 → Success
- 204 → Deleted
- 400 → Validation Error
- 404 → Not Found
- 409 → Duplicate Entry
- 500 → Server Error

---

## 🔥 Why This Project Is Production-Ready

- Proper REST architecture
- Clean controller separation
- Error handling middleware
- Async/Await
- Schema validation
- Professional response format
- Industry standard HTTP codes

---

## 📌 Future Improvements

- Authentication (JWT)
- Pagination
- Filtering & Sorting
- Role-based authorization
- Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Sarbjot Singh Walia**

Aspiring Full Stack Developer (MERN)

---

## ⭐ If you like this project, give it a star!
