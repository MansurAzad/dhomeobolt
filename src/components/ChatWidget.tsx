import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">লাইভ সাপোর্ট</h3>
                <p className="text-xs text-blue-100">সাধারণত ২ মিনিটে রিপ্লাই</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-blue-100 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-800">
                  আস্সালামু আলাইকুম! কীভাবে আমি আপনাকে সাহায্য করতে পারি?
                </p>
                <p className="text-xs text-gray-500 mt-1">২:৩০ PM</p>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-800">
                  আপনি যদি জরুরি সেবা চান, তাহলে সরাসরি কল করুন:
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+8801XXXXXXXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="আপনার বার্তা লিখুন..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            {/* Quick Actions */}
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors">
                অ্যাপয়েন্টমেন্ট
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors">
                ওষুধ অর্ডার
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors">
                জরুরি সেবা
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="mt-4">
        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
          <span className="text-xs">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ChatWidget;