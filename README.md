# My Dashboard

A **simple and modular React + TypeScript dashboard** using **Tailwind CSS v4**.  
This project demonstrates **reusable, type-safe components**, state management with **Context + useReducer**, and a responsive layout.

---

## 🚀 Features

- **Reusable Components**:  
  - `ClientCard` — displays client info  
  - `ProjectList` — lists projects with status and payments  
  - `DashboardStats` — summarizes totals, completed/unpaid projects, and revenue  
- **TypeScript**: strong typing for props, state, and optional fields  
- **Context API + useReducer**: centralized state management  
- **Tailwind CSS v4**: minimal, responsive design without extra config  
- **React Router DOM**: navigation between pages  

---

## 📁 Folder Structure

my-dashboard/
├─ src/
│ ├─ main.tsx
│ ├─ App.tsx
│ ├─ index.css
│ ├─ models.ts
│ ├─ reducer.ts
│ ├─ context/
│ │ └─ AppContext.tsx
│ ├─ components/
│ │ ├─ Navbar.tsx
│ │ ├─ ClientCard.tsx
│ │ ├─ ProjectList.tsx
│ │ └─ DashboardStats.tsx
│ └─ pages/
│ ├─ Dashboard.tsx
│ ├─ Clients.tsx
│ └─ Projects.tsx

yaml
Copy code

---

## ⚡ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/my-dashboard.git
cd my-dashboard
Install dependencies

bash
Copy code
npm install
Run the project locally

bash
Copy code
npm run dev
Open the link provided in the terminal (e.g., http://localhost:5173)

📸 Screenshots
Dashboard Stats

Project List

Client Cards

(Replace these with your actual screenshots)

🌐 Deployment
Live demo hosted on Vercel:
https://your-project.vercel.app

📝 Technologies Used
React

TypeScript

Tailwind CSS v4

React Router DOM

Context API + useReducer

💡 Notes
Tailwind v4 requires no config, just @import "tailwindcss"; in index.css

Components are modular and reusable across pages

Optional properties are safely handled (e.g., client email/phone)

Fully responsive and works on mobile & desktop

🎯 Author
Uwase Djaria

GitHub: https://github.com/your-UWASEdjaria

LinkedIn: https://www.linkedin.com/in/djaria-uwase