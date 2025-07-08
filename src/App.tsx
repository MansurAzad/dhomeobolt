import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Appointment from './components/Appointment';
import Telemedicine from './components/Telemedicine';
import Pharmacy from './components/Pharmacy';
import PatientPortal from './components/PatientPortal';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Appointment />
      <Telemedicine />
      <Pharmacy />
      <PatientPortal />
      <Blog />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;