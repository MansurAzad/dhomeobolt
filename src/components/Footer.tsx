import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-full p-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ডাঃ মোহাম্মদ আলী</h3>
                <p className="text-gray-400 text-sm">হোমিও বিশেষজ্ঞ</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              ২০+ বছরের অভিজ্ঞতা নিয়ে আধুনিক হোমিওপ্যাথিক চিকিৎসা সেবা প্রদান করছি। 
              আমাদের লক্ষ্য প্রতিটি রোগীর সুস্থতা এবং কল্যাণ।
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">হোম</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">ডাক্তার সম্পর্কে</a></li>
              <li><a href="#appointment" className="text-gray-400 hover:text-white transition-colors">অ্যাপয়েন্টমেন্ট</a></li>
              <li><a href="#telemedicine" className="text-gray-400 hover:text-white transition-colors">টেলিমেডিসিন</a></li>
              <li><a href="#pharmacy" className="text-gray-400 hover:text-white transition-colors">ফার্মেসি</a></li>
              <li><a href="#patient-portal" className="text-gray-400 hover:text-white transition-colors">রোগী পোর্টাল</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">স্বাস্থ্য পরামর্শ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">হোমিও চিকিৎসা</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">অনলাইন পরামর্শ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ই-প্রেসক্রিপশন</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ভিডিও কনসালটেশন</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">হোম ভিজিট</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ফলো-আপ সেবা</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">জরুরি সেবা</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+8801XXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">doctor@homeocare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">১২৩ মেইন রোড, ঢাকা - ১২০০</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">শনি - বুধ: ৯AM - ৯PM</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-600 rounded-lg">
              <p className="text-sm font-medium">জরুরি সেবা</p>
              <p className="text-xs text-blue-100">২৪/৭ উপলব্ধ</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © ২০২৪ ডাঃ মোহাম্মদ আলী - হোমিও বিশেষজ্ঞ। সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                গোপনীয়তা নীতি
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                নিয়মাবলী
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;