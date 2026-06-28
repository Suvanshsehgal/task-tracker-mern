# Task Tracker

A full-stack MERN Task Tracker application. Add, edit, delete, and filter tasks with a clean responsive UI.

## Tech Stack

- **Frontend:** React (Vite), Axios, React-Toastify
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Deployment:** (add links below)

## Features

- Create tasks with title and optional description
- Edit existing tasks
- Delete tasks
- Mark tasks as pending/completed
- Filter tasks by status (All, Pending, Completed)
- Toast notifications for success/error actions
- Fully responsive design (mobile + desktop)

## How to Run Locally

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Backend

```bash
cd backend
npm install
```

Edit `backend/.env` and set your MongoDB URI:

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/todo-assignment
```

Start the backend:

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
```

Make sure `frontend/.env` points to the backend URL:

```
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Deployed Links

- **Frontend:** _(add your Vercel/Netlify URL here)_
- **Backend:** _(add your Render URL here)_
