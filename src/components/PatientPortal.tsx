import React, { useState } from 'react';
import { User, FileText, Clock, Calendar, Download, Eye, MessageCircle, Bell, Settings } from 'lucide-react';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', name: 'ড্যাশবোর্ড', icon: User },
    { id: 'prescriptions', name: 'প্রেসক্রিপশন', icon: FileText },
    { id: 'appointments', name: 'অ্যাপয়েন্টমেন্ট', icon: Calendar },
    { id: 'history', name: 'মেডিকেল হিস্টোরি', icon: Clock },
    { id: 'notifications', name: 'নোটিফিকেশন', icon: Bell },
    { id: 'settings', name: 'সেটিংস', icon: Settings }
  ];

  const prescriptions = [
    {
      id: 1,
      date: '২৫ নভেম্বর, ২০২৪',
      diagnosis: 'গ্যাস্ট্রিক আলসার',
      medicines: ['Nux Vomica 200', 'Arsenicum Album 30', 'Carbo Veg 30'],
      status: 'active',
      followUp: '৭ দিন পর'
    },
    {
      id: 2,
      date: '২০ নভেম্বর, ২০২৪',
      diagnosis: 'মাইগ্রেন',
      medicines: ['Belladonna 30', 'Iris V 30'],
      status: 'completed',
      followUp: 'সম্পন্ন'
    },
    {
      id: 3,
      date: '১৫ নভেম্বর, ২০২৪',
      diagnosis: 'কাশি ও সর্দি',
      medicines: ['Bryonia 30', 'Pulsatilla 30'],
      status: 'completed',
      followUp: 'সম্পন্ন'
    }
  ];

  const appointments = [
    {
      id: 1,
      date: '২৮ নভেম্বর, ২০২৪',
      time: '১০:৩০ AM',
      type: 'চেম্বার ভিজিট',
      status: 'confirmed',
      token: 'T-005'
    },
    {
      id: 2,
      date: '৩০ নভেম্বর, ২০২৪',
      time: '৩:০০ PM',
      type: 'ভিডিও কল',
      status: 'pending',
      token: 'V-012'
    }
  ];

  return (
    <section id="patient-portal" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            রোগী পোর্টাল
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আপনার সকল মেডিকেল তথ্য এক জায়গায়। প্রেসক্রিপশন, অ্যাপয়েন্টমেন্ট এবং চিকিৎসা ইতিহাস পরিচালনা করুন।
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">জনাব রহিম</h3>
                <p className="text-sm text-gray-600">রোগী আইডি: P-2024-001</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">ড্যাশবোর্ড</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">মোট প্রেসক্রিপশন</p>
                          <p className="text-2xl font-bold text-blue-600">১৫</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-600 p-2 rounded-lg">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">আসছে অ্যাপয়েন্টমেন্ট</p>
                          <p className="text-2xl font-bold text-green-600">২</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-600 p-2 rounded-lg">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">মোট ভিজিট</p>
                          <p className="text-2xl font-bold text-purple-600">২৮</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">আসছে অ্যাপয়েন্টমেন্ট</h4>
                    <p className="text-yellow-700">২৮ নভেম্বর, ২০২৪ - ১০:৩০ AM (চেম্বার ভিজিট)</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">সাম্প্রতিক কার্যক্রম</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">নতুন প্রেসক্রিপশন পেয়েছেন</p>
                        <p className="text-sm text-gray-600">২৫ নভেম্বর, ২০২৪</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">অ্যাপয়েন্টমেন্ট নিশ্চিত করা হয়েছে</p>
                        <p className="text-sm text-gray-600">২৩ নভেম্বর, ২০২৪</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'prescriptions' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">প্রেসক্রিপশন</h3>
                
                <div className="space-y-4">
                  {prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{prescription.diagnosis}</h4>
                          <p className="text-sm text-gray-600">{prescription.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            prescription.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {prescription.status === 'active' ? 'চলমান' : 'সম্পন্ন'}
                          </span>
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">ওষুধ:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {prescription.medicines.map((medicine, index) => (
                              <li key={index}>• {medicine}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">পরবর্তী ভিজিট:</p>
                          <p className="text-sm text-gray-600">{prescription.followUp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">অ্যাপয়েন্টমেন্ট</h3>
                
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.type}</h4>
                          <p className="text-sm text-gray-600">{appointment.date} - {appointment.time}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            appointment.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status === 'confirmed' ? 'নিশ্চিত' : 'অপেক্ষায়'}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {appointment.token}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          {appointment.type === 'ভিডিও কল' ? 'কল জয়েন করুন' : 'বিস্তারিত'}
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          বাতিল করুন
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">মেডিকেল হিস্টোরি</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800">২০২৪</h4>
                    <div className="mt-3 space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-800">গ্যাস্ট্রিক আলসার</p>
                        <p className="text-sm text-gray-600">২৫ নভেম্বর - চিকিৎসা চলমান</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-800">মাইগ্রেন</p>
                        <p className="text-sm text-gray-600">২০ নভেম্বর - চিকিৎসা সম্পন্ন</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-800">২০২৩</h4>
                    <div className="mt-3 space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-800">এলার্জি</p>
                        <p className="text-sm text-gray-600">সেপ্টেম্বর - চিকিৎসা সম্পন্ন</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">নোটিফিকেশন</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">অ্যাপয়েন্টমেন্ট রিমাইন্ডার</p>
                      <p className="text-sm text-gray-600">আগামীকাল ১০:৩০ AM এ আপনার অ্যাপয়েন্টমেন্ট</p>
                      <p className="text-xs text-gray-500 mt-1">২ ঘণ্টা আগে</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <FileText className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">নতুন প্রেসক্রিপশন</p>
                      <p className="text-sm text-gray-600">ডাক্তার আপনার জন্য নতুন প্রেসক্রিপশন দিয়েছেন</p>
                      <p className="text-xs text-gray-500 mt-1">১ দিন আগে</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">সেটিংস</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">ব্যক্তিগত তথ্য</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                        <input
                          type="text"
                          value="জনাব রহিম"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল</label>
                        <input
                          type="tel"
                          value="01XXXXXXXXX"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                        <input
                          type="email"
                          value="rahim@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">নোটিফিকেশন সেটিংস</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-700">অ্যাপয়েন্টমেন্ট রিমাইন্ডার</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-700">নতুন প্রেসক্রিপশন</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-700">ফার্মেসি অফার</span>
                      </label>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    সেটিংস সেভ করুন
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientPortal;