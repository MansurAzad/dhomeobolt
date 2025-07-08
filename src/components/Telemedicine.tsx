import React, { useState } from 'react';
import { Video, MessageCircle, Phone, Clock, Shield, Monitor, Users, CheckCircle } from 'lucide-react';

const Telemedicine = () => {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <section id="telemedicine" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            টেলিমেডিসিন সেবা
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ঘরে বসে বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন। ভিডিও কল, চ্যাট বা ফোন কলের মাধ্যমে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'video'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ভিডিও কল
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'chat'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            চ্যাট সেবা
          </button>
          <button
            onClick={() => setActiveTab('phone')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'phone'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ফোন কল
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Tab Content */}
          <div className="space-y-6">
            {activeTab === 'video' && (
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">ভিডিও কল সেবা</h3>
                    <p className="text-gray-600">সরাসরি ভিডিও কলের মাধ্যমে ডাক্তারের পরামর্শ</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>HD কোয়ালিটি ভিডিও কল</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>রিয়েল-টাইম প্রেসক্রিপশন শেয়ার</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>সেশন রেকর্ডিং (যদি প্রয়োজন)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ইন্সট্যান্ট ই-প্রেসক্রিপশন</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">ভিডিও কল ফি</p>
                      <p className="text-sm text-gray-600">১৫-৩০ মিনিট সেশন</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">৫০০৳</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="bg-green-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">চ্যাট সেবা</h3>
                    <p className="text-gray-600">টেক্সট চ্যাটের মাধ্যমে ডাক্তারের পরামর্শ</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>২৪/৭ চ্যাট সাপোর্ট</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ছবি ও ডকুমেন্ট শেয়ার</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>চ্যাট হিস্টোরি সংরক্ষণ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>দ্রুত রেসপন্স</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">চ্যাট কনসালটেশন</p>
                      <p className="text-sm text-gray-600">প্রতি সেশন</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">৩০০৳</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'phone' && (
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">ফোন কল সেবা</h3>
                    <p className="text-gray-600">সরাসরি ফোন কলের মাধ্যমে ডাক্তারের পরামর্শ</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>অ্যাপয়েন্টমেন্ট ভিত্তিক কল</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ইমার্জেন্সি হটলাইন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>কল রেকর্ড সংরক্ষণ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>ফলো-আপ কল</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">ফোন কনসালটেশন</p>
                      <p className="text-sm text-gray-600">১০-২০ মিনিট কল</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">৪০০৳</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Start Session Button */}
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Video className="w-5 h-5" />
              <span>সেশন শুরু করুন</span>
            </button>
          </div>

          {/* Right - Features and Benefits */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">কেন টেলিমেডিসিন?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">সময় সাশ্রয়</h4>
                    <p className="text-sm text-gray-600">ঘরে বসেই পরামর্শ নিন, যাতায়াতের ঝামেলা নেই</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">নিরাপত্তা</h4>
                    <p className="text-sm text-gray-600">সম্পূর্ণ এনক্রিপ্টেড এবং নিরাপদ কমিউনিকেশন</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Monitor className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">সহজ ব্যবহার</h4>
                    <p className="text-sm text-gray-600">যেকোনো ডিভাইস থেকে সহজেই ব্যবহার করুন</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">সবার জন্য</h4>
                    <p className="text-sm text-gray-600">বয়স্ক, শিশু বা শারীরিক সমস্যা - সবার জন্য উপযুক্ত</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Times */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">টেলিমেডিসিন সময়সূচি</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">সকাল ৮:০০ - ১২:০০</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">উপলব্ধ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">দুপুর ২:০০ - ৬:০০</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">উপলব্ধ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">সন্ধ্যা ৭:০০ - ১০:০০</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">সীমিত</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">জরুরি যোগাযোগ</h3>
              <p className="text-red-700 mb-4">
                যেকোনো মেডিকেল ইমার্জেন্সিতে সরাসরি যোগাযোগ করুন:
              </p>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-800">+8801XXXXXXXXX</span>
              </div>
              <p className="text-sm text-red-600 mt-2">২৪/৭ উপলব্ধ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telemedicine;