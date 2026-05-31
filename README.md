# CarShortlist - Your Decision Assistant

CarShortlist is a data-driven web application designed to help car buyers move from confusion to a confident shortlist. By analyzing user preferences like budget, car type, and priorities (safety, efficiency, or features), the app provides ranked recommendations using a weighted "Value for Money" (VFM) algorithm.

---

## 🧠 Project Reflection

### What did you build and why? What did you deliberately cut?
I built a simple web application which helps user to find out the best car for themselves based on their budget, car type and priority. I deliberately cut the authentication, payment and dashboard because I don't want the user to enter unnecessary details which are not relevant to their choices and use at the moment and get straight to finding the best car for themselves. also i didn't use any database right now because it will cause unnecessary setup with the given time constraints.

### What’s your tech stack and why did you pick it?
My tech stack is **React (Vite)**, **NodeJS + Express**, and **Tailwind CSS** for styling. These are my go-to tech stack as it's quite easy to setup and see the output instantly. React + Node is a simple and widely used tech stack that offers great performance and developer experience.

### What did you delegate to AI tools vs. do manually?
I gave the monotonous task of generating the codes to Google Gemini and let myself decide the folder structure and the logic and requirements for the application. The tools help in building the application in seconds and help in reviewing code.

**Where did the tools help most?**
They were invaluable for scaffolding the initial components, generating the static JSON dataset, and implementing the mathematical scoring logic quickly.

**Where did they get in the way?**
Sometimes they generated redundant files at the root instead of the `src` folder, requiring manual intervention to maintain a clean project structure and ensure CSS/Tailwind changes reflected correctly.

### If you had another 4 hours, what would you add?
*   **Database Integration:** I would have integrated a database (like MongoDB or PostgreSQL) to keep data separate from the application, reducing overhead and allowing for easier data management.
*   **Robust Testing:** I would perform more robust testing and write comprehensive unit/integration test cases with the help of an AI assistant tool.
*   **UI/UX Enhancements:** I would significantly improve the UI by providing more specific design requirements and adding micro-interactions (like Framer Motion transitions) for a better overall user experience.

---

## 🚀 Setup & Installation

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd car-shortlist-app
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5001
```
Start the server:
```bash
npm run dev
```
The API will be running at `http://localhost:5001`.

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5001/api
```
Start the development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the port shown in your terminal).

---

## 🌐 Deployment & Performance Notes

### Infrastructure & Cold Starts
This project is deployed on **Render** (Backend) and **Vercel** (Frontend).
*   **Render Free Tier:** Please note that the backend service "spins down" after 15 minutes of inactivity. The first request after a break may experience a **30-50 second delay** while the server "wakes up."
*   **UX Handling:** I have implemented frontend logic to detect these delays and inform the user that the server is currently waking up, ensuring a better user experience during the "cold start" period.
*   **Production Scaling:** In a production environment, this would be resolved by moving to a paid instance or implementing a "self-ping" cron-job to maintain 100% availability.

## 🛠️ Key Features

*   **Dynamic Showroom:** Browse a catalog of 30+ popular Indian cars.
*   **Weighted Scoring:** A custom algorithm calculates a "Match Score" based on user priorities.
*   **VFM Index:** Highlights a "Value Leader" among recommendations, prioritizing budget headroom and user satisfaction.
*   **Responsive Design:** Fully accessible on mobile and desktop devices.

---

## 📂 Folder Structure
```text
car-shortlist-app/
├── backend/          # Express server with recommendation logic
│   ├── data/         # Static JSON dataset
│   └── src/          # API Controllers and Utils
└── frontend/         # React + Vite + Tailwind UI
    └── src/          # Components and Pages
```