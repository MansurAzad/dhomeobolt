import React, { useState } from 'react';
import { Users, Calendar, FileText, Package, TrendingUp, Clock, Phone, Mail } from 'lucide-react';
import { usePatients } from '../../hooks/usePatients';
import { useAppointments } from '../../hooks/useAppointments';
import { usePrescriptions } from '../../hooks/usePrescriptions';
import { useMedicines } from '../../hooks/useMedicines';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { patients } = usePatients();
  const { appointments } = useAppointments();
  const { prescriptions } = usePrescriptions();
  const { medicines } = useMedicines();

  const stats = [
    {
      title: 'মোট রোগী',
      value: patients.length,
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'আজকের অ্যাপয়েন্টমেন্ট',
      value: appointments.filter(a => 
        new Date(a.appointment_date).toDateString() === new Date().toDateString()
      ).length,
      icon: Calendar,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'মোট প্রেসক্রিপশন',
      value: prescriptions.length,
      icon: FileText,
      color: 'bg-purple-500',
      change: '+15%'
    },
    {
      title: 'ওষুধের স্টক',
      value: medicines.filter(m => m.in_stock).length,
      icon: Package,
      color: 'bg-orange-500',
      change: '-3%'
    }
  ];

  const recentAppointments = appointments
    .filter(a => a.status === 'pending' || a.status === 'confirmed')
    .slice(0, 5);

  const lowStockMedicines = medicines
    .filter(m => m.stock_quantity < 10)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">অ্যাডমিন ড্যাশবোর্ড</h1>
          <p className="text-gray-600">স্বাস্থ্যসেবা ব্যবস্থাপনা পরিচালনা</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} গত মাস থেকে
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Appointments */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">সাম্প্রতিক অ্যাপয়েন্টমেন্ট</h3>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">রোগী #{appointment.patient_id.slice(-6)}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(appointment.appointment_date).toLocaleDateString('bn-BD')} - {appointment.appointment_time}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status === 'confirmed' ? 'নিশ্চিত' : 'অপেক্ষায়'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Medicines */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">কম স্টকের ওষুধ</h3>
            <div className="space-y-4">
              {lowStockMedicines.map((medicine) => (
                <div key={medicine.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Package className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{medicine.name}</p>
                      <p className="text-sm text-gray-600">{medicine.brand}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-red-600 font-semibold">{medicine.stock_quantity} টি</p>
                    <p className="text-xs text-gray-500">বাকি আছে</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">দ্রুত কার্যক্রম</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-800">নতুন রোগী যোগ</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Calendar className="w-6 h-6 text-green-600" />
              <span className="font-medium text-green-800">অ্যাপয়েন্টমেন্ট দেখুন</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <FileText className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-800">প্রেসক্রিপশন তৈরি</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Package className="w-6 h-6 text-orange-600" />
              <span className="font-medium text-orange-800">ইনভেন্টরি ব্যবস্থাপনা</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;