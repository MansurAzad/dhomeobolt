import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, Package, Truck, CreditCard, Shield, Zap, Clock } from 'lucide-react';
import { useMedicines } from '../hooks/useMedicines';
import LazyImage from './LazyImage';
import toast from 'react-hot-toast';

const Pharmacy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { medicines, loading } = useMedicines();

  const categories = [
    { id: 'all', name: 'সব ওষুধ', count: 156 },
    { id: 'acute', name: 'তীব্র রোগ', count: 45 },
    { id: 'chronic', name: 'দীর্ঘমেয়াদী রোগ', count: 38 },
    { id: 'children', name: 'শিশু রোগ', count: 28 },
    { id: 'women', name: 'নারী স্বাস্থ্য', count: 22 },
    { id: 'skin', name: 'চর্মরোগ', count: 23 }
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = async (id: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setCartItems([...cartItems, id]);
    toast.success('কার্টে যোগ করা হয়েছে');
    setIsLoading(false);
  };

  const removeFromCart = async (id: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setCartItems(cartItems.filter(item => item !== id));
    toast.success('কার্ট থেকে সরানো হয়েছে');
    setIsLoading(false);
  };

  const isInCart = (id: string) => cartItems.includes(id);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600">ওষুধের তথ্য লোড হচ্ছে...</p>
        </div>
      </section>
    );
  }
  return (
    <section id="pharmacy" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            অনলাইন হোমিও ফার্মেসি
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            খাঁটি হোমিও ওষুধের বিশাল সংগ্রহ। বিশ্বস্ত ব্র্যান্ডের ওষুধ এবং দ্রুত হোম ডেলিভারি সেবা।
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 animate-fade-in-up animation-delay-400">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ওষুধের নাম খুঁজুন..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <Filter className="w-4 h-4" />
                <span>ফিল্টার</span>
              </button>
              <button className="relative flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <ShoppingCart className="w-4 h-4" />
                <span>কার্ট ({cartItems.length})</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 animate-fade-in-up animation-delay-600">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
          {filteredMedicines.map((medicine, index) => (
            <div 
              key={medicine.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <LazyImage
                  src={medicine.image_url || 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={medicine.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-all duration-300 transform hover:scale-110">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                {!medicine.in_stock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                      স্টক নেই
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>দ্রুত ডেলিভারি</span>
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{medicine.name}</h3>
                  <span className="text-sm text-gray-500">{medicine.brand}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{medicine.description}</p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-sm text-gray-500">(45 রিভিউ)</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">৳{medicine.price}</span>
                    <span className="text-sm text-gray-500 line-through">৳{medicine.original_price}</span>
                  </div>
                  <div className="text-sm text-green-600">
                    ৳{medicine.original_price - medicine.price} সাশ্রয়
                  </div>
                </div>
                
                <button
                  onClick={() => isInCart(medicine.id) ? removeFromCart(medicine.id) : addToCart(medicine.id)}
                  disabled={!medicine.in_stock || isLoading}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    medicine.in_stock
                      ? isInCart(medicine.id)
                        ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>অপেক্ষা করুন...</span>
                    </div>
                  ) : !medicine.in_stock 
                    ? 'স্টক নেই' 
                    : isInCart(medicine.id) 
                    ? 'কার্টে যোগ হয়েছে' 
                    : 'কার্টে যোগ করুন'
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">কোন ওষুধ পাওয়া যায়নি</h3>
            <p className="text-gray-500">অন্য ক্যাটেগরি বা সার্চ টার্ম ব্যবহার করে দেখুন</p>
          </div>
        )}

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up animation-delay-1000">
          <div className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">খাঁটি ওষুধ</h3>
            <p className="text-sm text-gray-600">১০০% অরিজিনাল এবং কার্যকর হোমিও ওষুধ</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>২৪ ঘণ্টার মধ্যে ঢাকায় ডেলিভারি</span>
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">নিরাপদ পেমেন্ট</h3>
            <p className="text-sm text-gray-600">bKash, Nagad, SSL Commerce</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">গ্যারান্টি</h3>
            <p className="text-sm text-gray-600">১০০% মানি ব্যাক গ্যারান্টি</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pharmacy;