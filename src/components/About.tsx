import React from 'react';
import { GraduationCap, Award, Clock, Users, FileText, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            ডাক্তার সম্পর্কে
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            অভিজ্ঞ হোমিও বিশেষজ্ঞ ডাঃ মোহাম্মদ আলী যিনি ২০+ বছর ধরে হোমিও চিকিৎসায় নিয়োজিত
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Doctor Image and Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full mb-6 flex items-center justify-center">
                <Users className="w-24 h-24 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">ডাঃ মোহাম্মদ আলী</h3>
              <p className="text-blue-600 font-medium mb-4">DHMS, BHMS, MD (Homeopathy)</p>
              <p className="text-gray-600">
                বাংলাদেশ হোমিওপ্যাথিক মেডিকেল অ্যাসোসিয়েশনের নিবন্ধিত সদস্য
              </p>
            </div>
          </div>

          {/* Right - Qualifications and Experience */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">শিক্ষাগত যোগ্যতা</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>DHMS - ঢাকা হোমিওপ্যাথিক মেডিকেল কলেজ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>BHMS - বাংলাদেশ হোমিওপ্যাথিক মেডিকেল কলেজ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>MD (Homeopathy) - ইন্টারন্যাশনাল হোমিও ইনস্টিটিউট</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">অভিজ্ঞতা ও বিশেষত্ব</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>২০+ বছর হোমিও চিকিৎসার অভিজ্ঞতা</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>ক্রনিক রোগ ও জটিল রোগের বিশেষজ্ঞ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>নারী ও শিশু রোগের অভিজ্ঞ চিকিৎসক</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">রেজিস্ট্রেশন তথ্য</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>রেজিস্ট্রেশন নম্বর:</strong> BMDC-12345</p>
                <p><strong>লাইসেন্স নম্বর:</strong> DHMS-54321</p>
                <p><strong>সদস্যপদ:</strong> বাংলাদেশ হোমিও মেডিকেল অ্যাসোসিয়েশন</p>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Specialties */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">চিকিৎসার বিশেষত্ব</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ক্রনিক রোগ',
              'স্কিন ডিজিজ',
              'এলার্জি ও এজমা',
              'গ্যাস্ট্রিক ও পেটের সমস্যা',
              'হাঁপানি ও শ্বাসকষ্ট',
              'মানসিক স্বাস্থ্য',
              'নারী ও শিশু রোগ',
              'ডায়াবেটিস',
              'উচ্চ রক্তচাপ'
            ].map((specialty, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-800">{specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;