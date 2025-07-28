import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Bot, User } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'আস্সালামু আলাইকুম! কীভাবে আমি আপনাকে সাহায্য করতে পারি?',
      sender: 'bot',
      time: '২:৩০ PM'
    },
    {
      id: 2,
      text: 'আপনি যদি জরুরি সেবা চান, তাহলে সরাসরি কল করুন: +8801XXXXXXXXX',
      sender: 'bot',
      time: '২:৩০ PM'
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString('bn-BD', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: 'ধন্যবাদ আপনার বার্তার জন্য। আমাদের একজন প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',
          sender: 'bot',
          time: new Date().toLocaleTimeString('bn-BD', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuickAction = (action: string) => {
    const quickMessage = {
      id: messages.length + 1,
      text: action,
      sender: 'user',
      time: new Date().toLocaleTimeString('bn-BD', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })
    };
    setMessages([...messages, quickMessage]);
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          <MessageCircle className="w-5 md:w-6 h-5 md:h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 h-96 md:h-[500px] flex flex-col animate-slide-in-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">লাইভ সাপোর্ট</h3>
                <p className="text-xs text-blue-100 flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>অনলাইন - সাধারণত ২ মিনিটে রিপ্লাই</span>
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                >
                  <div className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {msg.sender === 'bot' && (
                        <Bot className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      )}
                      {msg.sender === 'user' && (
                        <User className="w-4 h-4 text-blue-100 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className={`text-sm ${msg.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>
                          {msg.text}
                        </p>
                        {msg.text.includes('+8801XXXXXXXXX') && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <a 
                              href="tel:+8801XXXXXXXXX" 
                              className="text-sm font-medium text-green-600 hover:underline"
                            >
                              +8801XXXXXXXXX
                            </a>
                          </div>
                        )}
                        <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            {/* Quick Actions */}
            <div className="mt-2 flex flex-wrap gap-2">
              <button 
                onClick={() => handleQuickAction('অ্যাপয়েন্টমেন্ট বুক করতে চাই')}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                অ্যাপয়েন্টমেন্ট
              </button>
              <button 
                onClick={() => handleQuickAction('ওষুধ অর্ডার করতে চাই')}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                ওষুধ অর্ডার
              </button>
              <button 
                onClick={() => handleQuickAction('জরুরি সেবা প্রয়োজন')}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs hover:bg-red-200 transition-all duration-300 transform hover:scale-105"
              >
                জরুরি সেবা
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className={`mt-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 transform hover:scale-110 hover:shadow-xl"
        >
          <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
          <span className="text-xs hidden md:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ChatWidget;