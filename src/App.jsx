// App.jsx
import { useState } from 'react';
import reactLogo from '/assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App