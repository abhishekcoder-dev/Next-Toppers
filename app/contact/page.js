"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [devFormData, setDevFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isDevSubmitting, setIsDevSubmitting] = useState(false);
  const [devSubmitMessage, setDevSubmitMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Namaste! Main Toppersz AI hun 🤖 Tumhara study buddy! Koi doubt, motivation, ya timepass - sab kar sakta hun! Kya chahiye? 😎' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [quickQuestions] = useState([
    'What courses do you offer?',
    'What are the batch timings?',
    'How much are the fees?',
    'Do you provide study materials?',
    'Is there a demo class?',
    'How to enroll in courses?'
  ]);
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const chatSectionRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleChatMouseEnter = () => {
    if (chatContainerRef.current) {
      const hasScrollableContent = chatContainerRef.current.scrollHeight > chatContainerRef.current.clientHeight;
      if (hasScrollableContent) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
  };

  const handleChatMouseLeave = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0px';
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    document.title = "Next Toppers - Contact Us";
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDevInputChange = (e) => {
    setDevFormData({
      ...devFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = { sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Add typing indicator
    setChatMessages(prev => [...prev, { sender: 'bot', text: 'Typing...', isTyping: true }]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      });
      
      const data = await response.json();
      
      // Remove typing indicator and add real response
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { sender: 'bot', text: data.response }];
      });
    } catch (error) {
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { sender: 'bot', text: 'Sorry yaar, kuch technical problem hai. Try again! 😅' }];
      });
    }
  };
  
  const handleQuickQuestion = async (question) => {
    const userMessage = { sender: 'user', text: question };
    setChatMessages(prev => [...prev, userMessage]);
    
    setChatMessages(prev => [...prev, { sender: 'bot', text: 'Typing...', isTyping: true }]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });
      
      const data = await response.json();
      
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { sender: 'bot', text: data.response }];
      });
    } catch (error) {
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { sender: 'bot', text: 'Sorry yaar, kuch technical problem hai. Try again! 😅' }];
      });
    }
  };
  
  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('course') || lowerInput.includes('what courses')) {
      return 'We offer courses for Grade 9-12 including Aarambh 2.0 for Grade 9, Aarambh for Grade 10, and specialized Science & Humanities streams for Grade 11-12. Each course covers all core subjects with expert faculty! 📚';
    }
    if (lowerInput.includes('timing') || lowerInput.includes('batch')) {
      return 'We have flexible batch timings: Morning (8 AM - 12 PM), Afternoon (1 PM - 5 PM), and Evening (6 PM - 10 PM). You can choose the slot that fits your schedule! ⏰';
    }
    if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
      return 'Our fee structure is competitive and varies by grade and course. Please contact our admissions team for detailed fee information and available discounts! 💰';
    }
    if (lowerInput.includes('material') || lowerInput.includes('study')) {
      return 'Yes! We provide comprehensive study materials including detailed notes, practice papers, mock tests, and digital resources for all subjects. Everything you need for success! 📄';
    }
    if (lowerInput.includes('demo') || lowerInput.includes('trial')) {
      return 'Absolutely! We offer FREE demo classes so you can experience our teaching methodology before enrollment. Contact us to schedule your demo class! 🎬';
    }
    if (lowerInput.includes('enroll') || lowerInput.includes('admission') || lowerInput.includes('join')) {
      return 'To enroll, please visit our official Next Toppers website or contact our admissions team. Note: This website is for information only - actual enrollment happens on the official platform! 📝';
    }
    if (lowerInput.includes('teacher') || lowerInput.includes('faculty')) {
      return 'Our expert faculty includes Shobit Nirwan (Mathematics), Prashant Kirad (Science), and Digraj Sir (Social Studies) - all with 10+ years of experience and proven track records! 👨‍🏫';
    }
    if (lowerInput.match(/(hi+|hello+|hey+|yo+|namaste|salam|kya haal|kya scene|kaise ho|aur bhai|sun bhai|oye bot|bot kidhar|heeeyyyy|toppersz)/)) {
      const greetings = [
        'Arrey yaar! Kya haal hai? Main Toppersz Bot hun, tumhara study buddy! 😎',
        'Hello bhai! Kaisa chal rha hai? Koi doubt hai toh poocho! 😊',
        'Namaste! Main hun Toppersz AI, ready to help! Kya chahiye? 🙏',
        'Yo yo! Wassup dude? Study mein koi help chahiye? 🚀'
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // About Bot
    if (lowerInput.match(/(name|naam|who are you|tu kaun|bot hai kya|real hai|kisne banaya|details)/)) {
      return 'Main hun Toppersz Bot! 🤖 Next Toppers ka official AI assistant. Mujhe banaya hai talented developers ne to help students like you! Main study help, motivation, jokes sab kuch kar sakta hun! 😎';
    }
    
    // Jokes & Fun
    if (lowerInput.match(/(joke|mazak|funny|laugh|roast|meme|entertain)/)) {
      const jokes = [
        'Teacher: "Tumhara homework kahan hai?" Student: "Sir, dog ne kha liya!" Teacher: "Tumhare paas dog hai?" Student: "Nahi sir, isliye toh homework nahi hai!" 😂',
        'Student exam mein: "Bhagwan ji, agar aap hain toh mujhe pass kara do!" Bhagwan: "Beta, main hun, lekin Physics teacher nahi hun!" 😅',
        'Math teacher: "Agar tumhare paas 10 chocolates hain aur tum 8 kha jao, toh kya bacha?" Student: "Diabetes sir!" 🍫😂'
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Motivation
    if (lowerInput.match(/(motivate|inspire|mood kharab|bore|demotivate|fail|topper kaise|positive|boost)/)) {
      const motivations = [
        'Arre yaar, har topper pehle average student tha! 💪 Consistency is the key. Daily thoda thoda padho, magic ho jayega! ✨',
        'Bhai failure toh stepping stone hai success ka! 🚀 Har galti se kuch seekhte hain. Keep going, you got this! 🔥',
        'Padhai boring lage toh break lo, music suno, phir wapas focus karo! 🎵 Small steps, big results! 🏆'
      ];
      return motivations[Math.floor(Math.random() * motivations.length)];
    }
    
    return 'Interesting question! 🤔 Main help kar sakta hun courses, study tips, jokes, motivation, GK, maths - sab mein! Kya chahiye bolo? 🚀';
  };

  const handleDevSubmit = async (e) => {
    e.preventDefault();
    setIsDevSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/myzdjzkj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: devFormData.name,
          email: devFormData.email,
          subject: `[DEVELOPER CONTACT] ${devFormData.subject}`,
          message: devFormData.message,
          _replyto: devFormData.email,
          _subject: `Developer Contact: ${devFormData.subject} from ${devFormData.name}`
        })
      });
      
      if (response.ok) {
        setDevSubmitMessage('✅ Message sent to developer successfully!');
        setDevFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setDevSubmitMessage('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setDevSubmitMessage('❌ Failed to send message. Please try again.');
    }
    
    setIsDevSubmitting(false);
    setTimeout(() => setDevSubmitMessage(''), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/myzdjzkj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          grade: formData.grade,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });
      
      if (response.ok) {
        setSubmitMessage('✅ Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
      } else {
        setSubmitMessage('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('❌ Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="relative z-10 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHsoicvJjmBhA/company-logo_200_200/company-logo_200_200/0/1734597691585/next_toppers_logo?e=2147483647&v=beta&t=v8BGc1q8mtS_xcFTpqz4vOWSuqvuczx9cEH7WueZ1Zw"
              alt="Next Toppers Logo"
              width={40}
              height={40}
              className="rounded-lg shadow-lg shadow-cyan-400/25 object-cover"
            />
            <Link href="/">
              <Image
                src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/4370222540_7521371540_next_topper_logo%20%281%29.png"
                alt="Next Toppers Text Logo"
                width={150}
                height={40}
                className="object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Home</Link>
            <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
            <Link href="/contact" className="text-cyan-400 font-medium">Contact</Link>
            <Link href="/login" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Login</Link>
          </div>
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/courses" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block text-cyan-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/login" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or any assistance you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Chat Interface */}
          <div 
            ref={chatSectionRef}
            className="bg-gray-900/50 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">🤖 Chat with Toppersz AI</h2>
            
            {/* Chat Messages */}
            <div 
              ref={chatContainerRef} 
              className="bg-gray-800/50 rounded-lg p-4 h-96 md:h-[500px] overflow-y-auto mb-6 space-y-4" 
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: 'none'}}
              onMouseEnter={handleChatMouseEnter}
              onMouseLeave={handleChatMouseLeave}
            >
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {msg.sender === 'bot' && <span className="text-cyan-400 font-bold">Toppersz Bot: </span>}
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            
            {/* Quick Questions */}
            <div className="mb-6">
              <p className="text-gray-300 mb-3">Quick Questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="flex space-x-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </div>
            
            {/* Suggestion Text */}
            <div className="mt-3 text-center">
              <p className="text-gray-400 text-sm">
                💡 Aap aur bhi questions puch sakte hain - jokes, motivation, study tips, career advice! 🚀
              </p>
            </div>
          </div>

          {/* Developer Contact */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-pink-400/30">
            <h2 className="text-3xl font-bold text-pink-400 mb-8 text-center">Contact Developer</h2>
            
            <div className="space-y-8">
              {/* Telegram Contact */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.655-.377 2.655-1.377 2.655-.896 0-1.377-.896-1.377-2.655 0 0-.727-4.87-.896-6.728-.169-1.858.727-2.655 1.858-2.655s2.027.797 1.858 2.655z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Quick Chat on Telegram</h3>
                  <p className="text-gray-300 mb-4">Get instant responses and direct communication</p>
                  <a 
                    href="http://t.me/luckybhai_18" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.655-.377 2.655-1.377 2.655-.896 0-1.377-.896-1.377-2.655 0 0-.727-4.87-.896-6.728-.169-1.858.727-2.655 1.858-2.655s2.027.797 1.858 2.655z"/>
                    </svg>
                    <span>Message @luckybhai_18</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* OR Divider */}
              <div className="flex items-center justify-center py-4">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="px-4 font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">OR</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>

              {/* Direct Email Form */}
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-400/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-pink-500/25">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-2">Send Direct Message</h3>
                  <p className="text-gray-300 mb-4">Secure email communication with the developer</p>
                </div>
                
                <form onSubmit={handleDevSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="name"
                      value={devFormData.name}
                      onChange={handleDevInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-pink-400 focus:outline-none text-white backdrop-blur-sm"
                      placeholder="Your Name"
                      required
                    />
                    <input 
                      type="email"
                      name="email"
                      value={devFormData.email}
                      onChange={handleDevInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-pink-400 focus:outline-none text-white backdrop-blur-sm"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <input 
                    type="text"
                    name="subject"
                    value={devFormData.subject}
                    onChange={handleDevInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-pink-400 focus:outline-none text-white backdrop-blur-sm"
                    placeholder="Subject"
                    required
                  />
                  <textarea 
                    rows="3"
                    name="message"
                    value={devFormData.message}
                    onChange={handleDevInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-pink-400 focus:outline-none text-white backdrop-blur-sm"
                    placeholder="Your message to the developer..."
                    required
                  ></textarea>
                  {devSubmitMessage && (
                    <div className={`p-3 rounded-lg text-center font-semibold ${
                      devSubmitMessage.includes('✅') ? 'bg-green-500/20 text-green-400 border border-green-400/30' : 'bg-red-500/20 text-red-400 border border-red-400/30'
                    }`}>
                      {devSubmitMessage}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isDevSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isDevSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Help Developer Section */}
          <div className="lg:col-span-2 mt-12">
            <div className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-yellow-400/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/25">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  💝 Support the Developer
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                  Love this website? Help fuel more amazing projects! Your support means the world to me and keeps the creativity flowing. ✨
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/qr"
                    className="group px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg shadow-orange-500/25 flex items-center space-x-3"
                  >
                    <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span>💖 Send Love & Support</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">100% Secure Payment</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>UPI Payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    <span>QR Code Scan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    <span>Instant Transfer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-pink-400 mb-3">What are the batch timings?</h3>
              <p className="text-gray-300">We offer flexible batch timings including morning, afternoon, and evening slots to accommodate different schedules.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Do you provide study materials?</h3>
              <p className="text-gray-300">Yes, we provide comprehensive study materials, practice papers, and digital resources for all subjects.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Is there any demo class available?</h3>
              <p className="text-gray-300">Absolutely! We offer free demo classes so you can experience our teaching methodology before enrollment.</p>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">What is the fee structure?</h3>
              <p className="text-gray-300">Our fee structure is competitive and varies by grade and course. Contact us for detailed fee information.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}