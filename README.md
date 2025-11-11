# Ian Isavwa's Personal Portfolio

Welcome to the repository for my personal portfolio website. This is a single-page application built from scratch to showcase my skills, projects, and professional background.

**Visit the live site: [https://333ian.github.io/my-portfolio/](https://333ian.github.io/my-portfolio/)**

---

## 📸 Project Overview

This portfolio is a modern React application built with Vite. It's designed to be a clean, single-page, and smooth-scrolling experience for visitors. It features an animated "sparkly" background, a dynamic typing effect, and several sections including:
* **Home:** An introduction with a typing animation and links to my CV and social profiles.
* **About:** A detailed summary of my professional experience and a breakdown of my technical skills.
* **Projects:** A grid of my recent work, complete with descriptions, tech stacks, and links to the code.
* **Contact:** A fully functional contact form that sends me an email.

This repository contains the **React frontend**. The functional contact form is powered by a separate **Django REST Framework API** that I built and host on Railway.

---

## ✨ Features

* **Single-Page Application:** Smooth scrolling navigation to all sections.
* **Dynamic UI:** Built with `framer-motion` for fluid animations and page transitions.
* **Live Contact Form:** Connects to a custom-built Python/Django backend API to handle and forward messages.
* **Project Showcase:** A clean, card-based layout for my projects, complete with key features and GitHub links.
* **CV Viewer:** Allows visitors to view my CV (as a PDF) directly in their browser.
* **Responsive Design:** Fully responsive for mobile, tablet, and desktop.

---

## 🛠️ Technology Stack

This project is split into two main parts: the frontend (this repository) and the backend API.

### Frontend (GitHub Pages)

* **Framework:** React
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+)
* **Styling:** Plain CSS (with CSS Variables)
* **Animation:** Framer Motion
* **Icons:** React Icons
* **Deployment:** GitHub Pages

### Backend (Railway)

* **Framework:** Django & Django REST Framework
* **Language:** Python
* **Database:** PostgreSQL
* **CORS:** `django-cors-headers` (to allow the frontend to make requests)
* **Server:** Gunicorn
* **Deployment:** Railway

---

## 🚀 How to Run This Project Locally

To run the frontend for development:

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/333ian/my-portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd my-portfolio
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
This will start the app on `http://localhost:5173`.

**Note:** For the contact form to work locally, you must create a `.env` file in the root of this project and add your backend API URL, like this:
`VITE_API_BASE_URL=https://your-api-url.railway.app`

---

## 🔄 How to Update the Live Site

I've set up an easy workflow using `gh-pages` to update the live site.

1.  **Make your code changes** (e.g., in the `src/` folder).
2.  **Build the site:** This creates an updated `dist` folder.
    ```bash
    npm run build
    ```
3.  **Deploy the build:** This command pushes the `dist` folder to the `gh-pages` branch, which automatically updates your live website.
    ```bash
    npm run deploy
    ```
4.  Wait 1-2 minutes and see the changes!
