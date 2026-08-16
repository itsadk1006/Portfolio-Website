# Aditya Kumar - Portfolio Website

A modern, highly aesthetic, responsive personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX:** Clean, responsive design with smooth Framer Motion animations.
- **Dark/Light Mode:** Seamless toggling between dark (default) and light themes.
- **Modular Data Config:** Easily update all portfolio content from a single `client/src/data/portfolioData.js` file.
- **Interactive Sections:** Typing animations, floating badges, bento-grid layouts, and interactive project cards with filtering.
- **Functional Contact Form:** Connects to an Express backend and stores submissions in MongoDB.

## Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS v4, Framer Motion, Lucide React
- **Backend:** Node.js, Express.js, Mongoose (MongoDB), CORS, Helmet, Dotenv

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB running locally or a MongoDB Atlas connection string.

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your MongoDB connection string (or it will default to a local MongoDB instance):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   *The server should run on http://localhost:5000*

### 2. Frontend Setup

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend should run on http://localhost:5173*

## Customization

To customize the portfolio with your own details:
1. Open `client/src/data/portfolioData.js`.
2. Update the structured JSON objects for `personalInfo`, `skills`, `internships`, `projects`, and `achievements`.
3. The frontend will dynamically reflect all changes automatically.
4. Replace `client/public/resume.pdf` with your actual resume file.