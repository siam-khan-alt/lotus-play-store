# Lotus Play Store 🎮

A modern **React + Vite** web application for discovering, browsing, and downloading games with Firebase authentication.

## 🌐 Live Demo
[Try it Live](https://imaginative-cendol-d33611.netlify.app)

---

## 📖 Project Overview
Lotus Play Store is an online game library where users can:
- Browse indie games and see detailed information.
- Install or access games via provided links.
- Register/login using Email/Password or Google authentication.
- Update their profile (photo URL and name).
- Enjoy smooth animations and responsive design.

The application uses a **single layout** for all pages (header + footer). Some routes, like 404, may have a unique layout. Protected routes, like Game Details, require authentication.

---

## 🏠 Pages Overview

### 1. Homepage
- **Banner Slider:** 3+ slides showcasing featured games.
- **Popular Games Section:** Top 3 games sorted by rating with card layout.
- **Newsletter Section:** Email subscription form to get updates.
- Fully responsive for mobile, tablet, and desktop.

### 2. Game Details Page (Protected)
- Shows all game info from JSON data: title, cover photo, category, description, rating, developer, download link.
- Redirects to login if the user is not authenticated.

### 3. Authentication Pages
- **Login Page:**
  - Email & Password
  - Google Login
  - Link to Register page
- **Register Page:**
  - Name, Email, Photo URL, Password
  - Password validation: at least 6 chars, uppercase & lowercase letters
  - Link to Login page
- **Forgot Password:**
  - Redirects user to a form to reset password via email.
  - Prefills email if already entered on login page.

### 4. My Profile Page
- Displays user info and profile picture.
- **Update Info:** Redirects to a form to update Name & Photo URL.

### 5. 404 / Not Found Page
- Custom layout and design for unmatched routes.

### 6. Additional Routes
- About Us Page (`/about-us`): Provides project overview and developer info.

---

## ⚡ Features
- Email/Password & Google SignIn  
- Smooth page transitions (**Framer Motion**)  
- Toast notifications (**React Toastify**)  
- Responsive design (mobile, tablet, desktop)  
- Dynamic tab titles for each page  
- Newsletter subscription section  
- Update profile information  
- Protected Game Details route  
- 404 Page for unmatched routes  

---

## 🛠️ Technologies & Packages
- **Frontend:** React, Vite, TailwindCSS, DaisyUI  
- **Routing:** React Router  
- **Animations:** Framer Motion  
- **Notifications:** React Toastify  
- **Slider:** Swiper  
- **Backend/Auth:** Firebase  
- **Other Tools:** React Icons, React Spinners  

**Dependencies (npm):**
```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.4",
    "tailwindcss": "^4.1.15",
    "daisyui": "^5.3.7",
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "react-icons": "^5.5.0",
    "react-spinners": "^0.17.0"
  }
}```
## 💻 Local Setup

1. **Clone the repository**  
   git clone https://github.com/siam-khan-alt/lotus-play-store.git  
   cd lotus-play-store

2. **Install dependencies**  
   npm install

3. **Setup Environment Variables**  
# Create a `.env` file in the root and add your Firebase config
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

   ⚠️ **Keep `.env` private and do not push to GitHub.**

4. **Run the development server**  
   npm run dev

5. **Build for production**  
   npm run build

6. **Preview production build**  
   npm run preview
