import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, Package, Truck, CreditCard, Shield } from 'lucide-react';
import { useMedicines } from '../hooks/useMedicines';
import toast from 'react-hot-toast';

const Pharmacy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const { medicines, loading } = useMedicines();

  const categories = [
    { id: 'all', name: 'সব ওষুধ', count: 156 },
    { id: 'acute', name: 'তীব্র রোগ', count: 45 },
    { id: 'chronic', name: 'দীর্ঘমেয়াদী রোগ', count: 38 },
    { id: 'children', name: 'শিশু রোগ', count: 28 },
    { id: 'women', name: 'নারী স্বাস্থ্য', count: 22 },
    { id: 'skin', name: 'চর্মরোগ', count: 23 }
  ];

  const medicines = [
    {
      id: 1,
      name: 'Arsenicum Album 30',
      category: 'acute',
      price: 120,
      originalPrice: 140,
      description: 'গ্যাস্ট্রিক, ডায়রিয়া এবং অস্থিরতার জন্য',
      inStock: true,
      rating: 4.8,
      reviews: 45,
      brand: 'Hahnemann',
      image: 'https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'Nux Vomica 200',
      category: 'chronic',
      price: 150,
      originalPrice: 180,
      description: 'বদহজম, কোষ্ঠকাঠিন্য এবং অ্যাসিডিটির জন্য',
      inStock: true,
      rating: 4.9,
      reviews: 62,
      brand: 'Reckeweg',
      image: 'https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Chamomilla 30',
      category: 'children',
      price: 110,
      originalPrice: 130,
      description: 'শিশুদের দাঁত ওঠা এবং কান্নাকাটির জন্য',
      inStock: true,
      rating: 4.7,
      reviews: 38,
      brand: 'SBL',
      image: 'https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'Sepia 200',
      category: 'women',
      price: 165,
      originalPrice: 190,
      description: 'নারীদের হরমোনাল সমস্যা এবং মানসিক অবসাদ',
      inStock: false,
      rating: 4.6,
      reviews: 29,
      brand: 'Hahnemann',
      image: 'https://images.pexels.com/photos/3683071/pexels-photo-3683071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      name: 'Sulphur 30',
      category: 'skin',
      price: 135,
      originalPrice: 155,
      description: 'চর্মরোগ, একজিমা এবং চুলকানির জন্য',
      inStock: true,
      rating: 4.8,
      reviews: 51,
      brand: 'Reckeweg',

  const filteredMedicines = selectedCategory === 'all' 
    ? medicines 
    : medicines.filter(medicine => medicine.category === selectedCategory);

  const addToCart = (id: string) => {
    setCartItems([...cartItems, id]);
    toast.success('কার্টে যোগ করা হয়েছে');
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item !== id));
    toast.success('কার্ট থেকে সরানো হয়েছে');
  };

  const isInCart = (id: string) => cartItems.includes(id);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">ওষুধের তথ্য লোড হচ্ছে...</p>
        </div>
      </section>
    );
  }
  return (
    <section id="pharmacy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            অনলাইন হোমিও ফার্মেসি
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            খাঁটি হোমিও ওষুধের বিশাল সংগ্রহ। বিশ্বস্ত ব্র্যান্ডের ওষুধ এবং দ্রুত হোম ডেলিভারি সেবা।
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ওষুধের নাম খুঁজুন..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>ফিল্টার</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4" />
                <span>কার্ট ({cartItems.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                {!medicine.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                      স্টক নেই
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{medicine.name}</h3>
                  <span className="text-sm text-gray-500">{medicine.brand}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{medicine.description}</p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
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
                  disabled={!medicine.in_stock}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    medicine.in_stock
                      ? isInCart(medicine.id)
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {!medicine.in_stock 
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

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">খাঁটি ওষুধ</h3>
            <p className="text-sm text-gray-600">১০০% অরিজিনাল এবং কার্যকর হোমিও ওষুধ</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">দ্রুত ডেলিভারি</h3>
            <p className="text-sm text-gray-600">২৪ ঘণ্টার মধ্যে ঢাকায় ডেলিভারি</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">নিরাপদ পেমেন্ট</h3>
            <p className="text-sm text-gray-600">bKash, Nagad, SSL Commerce</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="bg-orange-100 p-3 rounded-lg w-fit mx-auto mb-4">
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