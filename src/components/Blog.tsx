import React from 'react';
import { Calendar, User, BookOpen, Heart, Eye, Share2 } from 'lucide-react';
import LazyImage from './LazyImage';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'হোমিওপ্যাথিতে ডায়াবেটিসের চিকিৎসা',
      excerpt: 'হোমিওপ্যাথি পদ্ধতিতে ডায়াবেটিস নিয়ন্ত্রণে রাখার কার্যকর উপায় এবং প্রাকৃতিক সমাধান সম্পর্কে বিস্তারিত আলোচনা।',
      image: 'https://images.pexels.com/photos/6823600/pexels-photo-6823600.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '২৫ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৫ মিনিট',
      views: 245,
      category: 'চিকিৎসা'
    },
    {
      id: 2,
      title: 'শিশুদের সর্দি-কাশির হোমিও সমাধান',
      excerpt: 'শিশুদের সর্দি-কাশি এবং জ্বরের জন্য নিরাপদ ও কার্যকর হোমিওপ্যাথিক ওষুধ এবং ঘরোয়া পরিচর্যার পদ্ধতি।',
      image: 'https://images.pexels.com/photos/7195706/pexels-photo-7195706.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '২২ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৪ মিনিট',
      views: 189,
      category: 'শিশু স্বাস্থ্য'
    },
    {
      id: 3,
      title: 'মানসিক স্বাস্থ্য ও হোমিওপ্যাথি',
      excerpt: 'দুশ্চিন্তা, বিষণ্ণতা এবং মানসিক চাপের জন্য হোমিওপ্যাথিক চিকিৎসা পদ্ধতি এবং জীবনযাত্রার পরিবর্তনের গুরুত্ব।',
      image: 'https://images.pexels.com/photos/3759110/pexels-photo-3759110.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '২০ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৬ মিনিট',
      views: 312,
      category: 'মানসিক স্বাস্থ্য'
    },
    {
      id: 4,
      title: 'নারীদের হরমোনাল সমস্যা ও সমাধান',
      excerpt: 'নারীদের মাসিক সমস্যা, হরমোনাল ভারসাম্যহীনতা এবং প্রজনন স্বাস্থ্যের জন্য হোমিওপ্যাথিক চিকিৎসা।',
      image: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '১৮ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৭ মিনিট',
      views: 278,
      category: 'নারী স্বাস্থ্য'
    },
    {
      id: 5,
      title: 'চর্মরোগের হোমিও চিকিৎসা',
      excerpt: 'একজিমা, সোরিয়াসিস এবং অন্যান্য চর্মরোগের জন্য হোমিওপ্যাথিক চিকিৎসা পদ্ধতি এবং প্রতিরোধমূলক ব্যবস্থা।',
      image: 'https://images.pexels.com/photos/5473056/pexels-photo-5473056.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '১৫ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৫ মিনিট',
      views: 156,
      category: 'চর্মরোগ'
    },
    {
      id: 6,
      title: 'বয়স্কদের স্বাস্থ্য পরিচর্যা',
      excerpt: 'বয়স্কদের সাধারণ স্বাস্থ্য সমস্যা যেমন আর্থ্রাইটিস, উচ্চ রক্তচাপ এবং হৃদরোগের হোমিওপ্যাথিক সমাধান।',
      image: 'https://images.pexels.com/photos/5473169/pexels-photo-5473169.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '১২ নভেম্বর, ২০২৪',
      author: 'ডাঃ মোহাম্মদ আলী',
      readTime: '৮ মিনিট',
      views: 203,
      category: 'বয়স্ক স্বাস্থ্য'
    }
  ];

  const healthTips = [
    {
      id: 1,
      title: 'প্রতিদিন সকালে গরম পানি পান করুন',
      description: 'হজম শক্তি বৃদ্ধি এবং বিপাকক্রিয়া উন্নত করতে সাহায্য করে।'
    },
    {
      id: 2,
      title: 'নিয়মিত ব্যায়াম করুন',
      description: 'প্রতিদিন কমপক্ষে ৩০ মিনিট হাঁটা বা হালকা ব্যায়াম করুন।'
    },
    {
      id: 3,
      title: 'পর্যাপ্ত ঘুম নিন',
      description: 'দৈনিক ৭-৮ ঘণ্টা ঘুম শরীর ও মনের জন্য অত্যন্ত গুরুত্বপূর্ণ।'
    },
    {
      id: 4,
      title: 'মানসিক চাপ কমান',
      description: 'যোগব্যায়াম, ধ্যান বা প্রিয় কাজ করে মানসিক চাপ কমান।'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            স্বাস্থ্য পরামর্শ ও তথ্য
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            হোমিওপ্যাথি সম্পর্কিত সর্বশেষ তথ্য, চিকিৎসা পদ্ধতি এবং স্বাস্থ্য টিপস জানুন।
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Blog Posts */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>শেয়ার</span>
                        </button>
                      </div>
                      
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        আরও পড়ুন →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                আরও পোস্ট দেখুন
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Health Tips */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>দৈনিক স্বাস্থ্য টিপস</span>
              </h3>
              
              <div className="space-y-4">
                {healthTips.map((tip) => (
                  <div key={tip.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">বিভাগসমূহ</h3>
              
              <div className="space-y-2">
                {[
                  { name: 'চিকিৎসা', count: 12 },
                  { name: 'শিশু স্বাস্থ্য', count: 8 },
                  { name: 'নারী স্বাস্থ্য', count: 6 },
                  { name: 'মানসিক স্বাস্থ্য', count: 5 },
                  { name: 'চর্মরোগ', count: 4 },
                  { name: 'বয়স্ক স্বাস্থ্য', count: 3 }
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">স্বাস্থ্য তথ্য পেতে</h3>
              <p className="text-blue-100 mb-4">
                নিয়মিত স্বাস্থ্য টিপস এবং হোমিওপ্যাথি বিষয়ক তথ্য পেতে সাবস্ক্রাইব করুন।
              </p>
              
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  সাবস্ক্রাইব করুন
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">জনপ্রিয় পোস্ট</h3>
              
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-start space-x-3">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm mb-1 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.views} ভিউ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;