import React from 'react';
import { Calendar, Video, Pill, FileText, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">২০+ বছরের অভিজ্ঞতা</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              আধুনিক হোমিও চিকিৎসা <br />
              <span className="text-blue-600">ডিজিটাল স্বাস্থ্যসেবা</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              বিশ্বমানের হোমিও চিকিৎসা এবং আধুনিক ডিজিটাল প্রযুক্তির সমন্বয়ে পূর্ণাঙ্গ স্বাস্থ্যসেবা। 
              ঘরে বসেই পান অভিজ্ঞ ডাক্তারের পরামর্শ, ই-প্রেসক্রিপশন এবং হোম ডেলিভারি সেবা।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
              </button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <Video className="w-5 h-5" />
                <span>ভিডিও কল সেবা</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">৫০০০+</div>
                <div className="text-sm text-gray-600">সুস্থ রোগী</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">৯৮%</div>
                <div className="text-sm text-gray-600">সন্তুষ্ট রোগী</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">২৪/৭</div>
                <div className="text-sm text-gray-600">অনলাইন সেবা</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">১০০+</div>
                <div className="text-sm text-gray-600">ওষুধের ভাণ্ডার</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">স্মার্ট অ্যাপয়েন্টমেন্ট</h3>
                  <p className="text-sm text-gray-600">অনলাইনে বুকিং, টোকেন সিস্টেম ও রিমাইন্ডার</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Video className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">টেলিমেডিসিন সেবা</h3>
                  <p className="text-sm text-gray-600">ভিডিও কল, চ্যাট এবং ডিজিটাল পরামর্শ</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ই-প্রেসক্রিপশন</h3>
                  <p className="text-sm text-gray-600">ডিজিটাল প্রেসক্রিপশন এবং মেডিকেল হিস্টোরি</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Pill className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">অনলাইন ফার্মেসি</h3>
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