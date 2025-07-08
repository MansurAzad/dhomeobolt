import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    problem: '',
    type: 'chamber'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Appointment booked:', formData);
    alert('অ্যাপয়েন্টমেন্ট বুকিং সফল হয়েছে!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            অ্যাপয়েন্টমেন্ট বুকিং
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আপনার সুবিধামত সময়ে ডাক্তারের সাথে দেখা করুন। চেম্বার অথবা ভিডিও কল - দুটি অপশনই উপলব্ধ।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Appointment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">অ্যাপয়েন্টমেন্ট বুক করুন</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  অ্যাপয়েন্টমেন্টের ধরন *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="chamber">চেম্বার ভিজিট</option>
                  <option value="video">ভিডিও কল</option>
                  <option value="home">হোম ভিজিট</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    তারিখ *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    সময় *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">সময় নির্বাচন করুন</option>
                    <option value="09:00">৯:০০ AM</option>
                    <option value="10:00">১০:০০ AM</option>
                    <option value="11:00">১১:০০ AM</option>
                    <option value="12:00">১২:০০ PM</option>
                    <option value="14:00">২:০০ PM</option>
                    <option value="15:00">৩:০০ PM</option>
                    <option value="16:00">৪:০০ PM</option>
                    <option value="17:00">৫:০০ PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  সমস্যার বিবরণ
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনার স্বাস্থ্য সমস্যার বিবরণ দিন..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>অ্যাপয়েন্টমেন্ট বুক করুন</span>
              </button>
            </form>
          </div>

          {/* Right - Schedule and Info */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">চেম্বার সময়সূচি</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">শনিবার - বুধবার</span>
                  </div>
                  <span className="text-green-600 font-semibold">৯:০০ AM - ৯:০০ PM</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">বৃহস্পতিবার</span>
                  </div>
                  <span className="text-green-600 font-semibold">৯:০০ AM - ৫:০০ PM</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="font-medium">শুক্রবার</span>
                  </div>
                  <span className="text-red-600 font-semibold">বন্ধ</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">যোগাযোগ তথ্য</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">ফোন নম্বর</p>
                    <p className="text-gray-600">+8801XXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">ইমেইল</p>
                    <p className="text-gray-600">doctor@homeocare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">চেম্বার ঠিকানা</p>
                    <p className="text-gray-600">১২৩ মেইন রোড, ঢাকা - ১২০০</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">বিশেষ সুবিধা</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SMS/Email রিমাইন্ডার</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">ডিজিটাল প্রেসক্রিপশন</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">পেমেন্ট ফ্লেক্সিবিলিটি</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">ফলো-আপ সিস্টেম</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;