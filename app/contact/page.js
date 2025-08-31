"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Next Toppers - Contact Us";
  }, []);
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
            <Image
              src="https://decicqog4ulhy.cloudfront.net/0/admin_v1/application_management/clientlogo/4370222540_7521371540_next_topper_logo%20%281%29.png"
              alt="Next Toppers Text Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Home</Link>
            <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
            <Link href="/contact" className="text-cyan-400 font-medium">Contact</Link>
            <Link href="/login" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Login</Link>
          </div>
        </div>
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
          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Grade/Class</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white">
                  <option value="">Select your grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11-science">Grade 11 - Science</option>
                  <option value="11-humanities">Grade 11 - Humanities</option>
                  <option value="12-science">Grade 12 - Science</option>
                  <option value="12-humanities">Grade 12 - Humanities</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                  placeholder="Tell us about your requirements or questions"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-pink-400/30">
              <h2 className="text-3xl font-bold text-pink-400 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Address</h3>
                    <p className="text-gray-300">
                      Next Toppers Academy<br/>
                      123 Education Street<br/>
                      Learning District, City - 123456
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Phone</h3>
                    <p className="text-gray-300">
                      +91 98765 43210<br/>
                      +91 87654 32109
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Email</h3>
                    <p className="text-gray-300">
                      info@nexttoppers.com<br/>
                      admissions@nexttoppers.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Office Hours</h3>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br/>
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Schedule a Demo Class
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Download Brochure
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                  Talk to Counselor
                </button>
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