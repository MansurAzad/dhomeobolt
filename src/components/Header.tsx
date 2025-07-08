import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Calendar, ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+8801XXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>doctor@homeocare.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>চেম্বার খোলা: সকাল ৯টা - রাত ৯টা</span>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 rounded-full p-2">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">ডাঃ মোহাম্মদ আলী</h1>
              <p className="text-sm text-gray-600">হোমিও বিশেষজ্ঞ ও আধুনিক ফার্মেসি</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">হোম</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">ডাক্তার সম্পর্কে</a>
            <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition-colors">অ্যাপয়েন্টমেন্ট</a>
            <a href="#telemedicine" className="text-gray-700 hover:text-blue-600 transition-colors">টেলিমেডিসিন</a>
            <a href="#pharmacy" className="text-gray-700 hover:text-blue-600 transition-colors">ফার্মেসি</a>
            <a href="#patient-portal" className="text-gray-700 hover:text-blue-600 transition-colors">রোগী পোর্টাল</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">স্বাস্থ্য পরামর্শ</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>বুক করুন</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span>কার্ট</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <User className="w-4 h-4" />
              <span>লগইন</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">হোম</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">ডাক্তার সম্পর্কে</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 transition-colors">অ্যাপয়েন্টমেন্ট</a>
              <a href="#telemedicine" className="text-gray-700 hover:text-blue-600 transition-colors">টেলিমেডিসিন</a>
              <a href="#pharmacy" className="text-gray-700 hover:text-blue-600 transition-colors">ফার্মেসি</a>
              <a href="#patient-portal" className="text-gray-700 hover:text-blue-600 transition-colors">রোগী পোর্টাল</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">স্বাস্থ্য পরামর্শ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>বুক করুন</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  <span>কার্ট</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <User className="w-4 h-4" />
                  <span>লগইন</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;