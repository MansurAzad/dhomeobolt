import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
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
    <ErrorBoundary>
      <AuthProvider>
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
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;