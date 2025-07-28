import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Calendar, ShoppingCart, User, Heart, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './auth/LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+8801XXXXXXXXX</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>doctor@homeocare.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>চেম্বার খোলা: সকাল ৯টা - রাত ৯টা</span>
            <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors cursor-pointer">
              <Calendar className="w-4 h-4" />
              <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 md:w-8 h-6 md:h-8 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">ডাঃ মোহাম্মদ আলী</h1>
              <p className="text-xs md:text-sm text-gray-600">হোমিও বিশেষজ্ঞ ও আধুনিক ফার্মেসি</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              হোম
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              ডাক্তার সম্পর্কে
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#appointment" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              অ্যাপয়েন্টমেন্ট
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#telemedicine" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              টেলিমেডিসিন
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pharmacy" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              ফার্মেসি
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#patient-portal" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              রোগী পোর্টাল
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#blog" className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group">
              স্বাস্থ্য পরামর্শ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="relative flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Calendar className="w-4 h-4" />
              <span>বুক করুন</span>
            </button>
            <button className="relative flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <ShoppingCart className="w-4 h-4" />
              <span>কার্ট</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">3</span>
            </button>
            {user ? (
              <div className="flex items-center space-x-3">
                <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">2</span>
                </button>
                <span className="text-sm text-gray-700">স্বাগতম, {user.user_metadata?.name || user.email}</span>
                <button 
                  onClick={signOut}
                  className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <User className="w-4 h-4" />
                  <span>লগআউট</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <User className="w-4 h-4" />
                <span>লগইন</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" /> : 
              <Menu className="w-6 h-6 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4 border-t border-gray-200' : 'max-h-0 opacity-0'
        }`}>
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>হোম</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>ডাক্তার সম্পর্কে</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>অ্যাপয়েন্টমেন্ট</a>
              <a href="#telemedicine" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>টেলিমেডিসিন</a>
              <a href="#pharmacy" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>ফার্মেসি</a>
              <a href="#patient-portal" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>রোগী পোর্টাল</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>স্বাস্থ্য পরামর্শ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-4 h-4" />
                  <span>বুক করুন</span>
                </button>
                <button className="relative flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="w-4 h-4" />
                  <span>কার্ট</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </button>
                {user ? (
                  <button 
                    onClick={signOut}
                    className="flex items-center justify-center space-x-2 border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span>লগআউট</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsLoginModalOpen(true)}
                    className="flex items-center justify-center space-x-2 border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span>লগইন</span>
                  </button>
                )}
              </div>
            </div>
        </nav>
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
};

export default Header;