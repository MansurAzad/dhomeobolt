import React from 'react';
import { Calendar, Video, Pill, FileText, Clock, Award, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 md:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">২০+ বছরের অভিজ্ঞতা</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up animation-delay-200">
              আধুনিক হোমিও চিকিৎসা <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate-gradient-x">ডিজিটাল স্বাস্থ্যসেবা</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
              বিশ্বমানের হোমিও চিকিৎসা এবং আধুনিক ডিজিটাল প্রযুক্তির সমন্বয়ে পূর্ণাঙ্গ স্বাস্থ্যসেবা। 
              ঘরে বসেই পান অভিজ্ঞ ডাক্তারের পরামর্শ, ই-প্রেসক্রিপশন এবং হোম ডেলিভারি সেবা।
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up animation-delay-600">
              <button className="group bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg">
                <Calendar className="w-5 h-5" />
                <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg">
                <Video className="w-5 h-5" />
                <span>ভিডিও কল সেবা</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8 animate-fade-in-up animation-delay-800">
              <div className="text-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl md:text-2xl font-bold text-blue-600 animate-counter" data-target="5000">৫০০০+</div>
                <div className="text-sm text-gray-600">সুস্থ রোগী</div>
              </div>
              <div className="text-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl md:text-2xl font-bold text-green-600 animate-counter" data-target="98">৯৮%</div>
                <div className="text-sm text-gray-600">সন্তুষ্ট রোগী</div>
              </div>
              <div className="text-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl md:text-2xl font-bold text-purple-600">২৪/৭</div>
                <div className="text-sm text-gray-600">অনলাইন সেবা</div>
              </div>
              <div className="text-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-xl md:text-2xl font-bold text-orange-600 animate-counter" data-target="100">১০০+</div>
                <div className="text-sm text-gray-600">ওষুধের ভাণ্ডার</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up animation-delay-1000">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">স্মার্ট অ্যাপয়েন্টমেন্ট</h3>
                  <p className="text-sm text-gray-600">অনলাইনে বুকিং, টোকেন সিস্টেম ও রিমাইন্ডার</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">টেলিমেডিসিন সেবা</h3>
                  <p className="text-sm text-gray-600">ভিডিও কল, চ্যাট এবং ডিজিটাল পরামর্শ</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-purple-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">ই-প্রেসক্রিপশন</h3>
                  <p className="text-sm text-gray-600">ডিজিটাল প্রেসক্রিপশন এবং মেডিকেল হিস্টোরি</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-orange-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Pill className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">অনলাইন ফার্মেসি</h3>
                  <p className="text-sm text-gray-600">হোম ডেলিভারি এবং অনলাইন পেমেন্ট</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;