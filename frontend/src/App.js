import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/hero/HeroSection';
import Features from './components/features/Features';
import Services from './components/servicios/Services';
import Testimonials from './components/testimonials/Testimonials';
import AboutUs from './components/aboutus/AboutUs';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import FloatingWhatsAppButton from './components/floatwhatsapp/FloatingWhatsAppButton';
import Login from './components/login/Login';
import AdminDashboard from './components/admin/AdminDashboard';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
        <Header />
        <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md fixed top-4 right-4">
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Features />
                <Services />
                <Testimonials />
                <AboutUs />
                <ContactForm />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
