"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    document.title = "Next Toppers - About Us";
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
            <Link href="/about" className="text-cyan-400 font-medium">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</Link>
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
              <Link href="/about" className="block text-cyan-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/login" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* About Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            About Next Toppers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering students to achieve academic excellence through innovative teaching methods and expert guidance.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Next Toppers, we believe every student has the potential to excel. Our mission is to provide world-class education that transforms students into confident learners and future leaders.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We combine traditional teaching excellence with modern technology to create an engaging and effective learning environment for students in grades 9-12.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Expert teachers with proven track records</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Personalized learning approach</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Comprehensive study materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Regular assessments and feedback</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-pink-400 mb-12">Meet Our Expert Faculty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-cyan-400/30 text-center">
              <Image
                src="https://yt3.googleusercontent.com/tFOJTMY0iI_SJHIp3-sa21Hnf1rOMf6q-dfS0R2gOfRWOpQbd2wBVPZUppFunNKTRC-avbVYtw=s900-c-k-c0x00ffffff-no-rj"
                alt="Shobit Nirwan"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Shobit Nirwan</h3>
              <p className="text-gray-300">Mathematics Expert</p>
              <p className="text-sm text-gray-400 mt-2">10+ years experience in competitive exam preparation</p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-400/30 text-center">
              <Image
                src="https://yt3.googleusercontent.com/zN1pXrwKEusunmJZnBABoXxgILwD1QEfPoEITT6d6FFcfHaLpxrRpN5s2PZDsyCKIQmKPTtCuw=s900-c-k-c0x00ffffff-no-rj"
                alt="Prashant Kirad"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">Prashant Kirad</h3>
              <p className="text-gray-300">Science Specialist</p>
              <p className="text-sm text-gray-400 mt-2">Expert in Physics, Chemistry & Biology</p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-400/30 text-center">
              <Image
                src="https://i.playboard.app/p/xt6yedy7LxOY62wHli-JRhtiYFkpOAUasq5nCg46SpmiBzwRdJCQB-bOuUxE_jVVJDMEdJOc/default.jpg"
                alt="Digraj Sir"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-purple-400 mb-2">Digraj Sir</h3>
              <p className="text-gray-300">Social Studies Expert</p>
              <p className="text-sm text-gray-400 mt-2">Comprehensive knowledge of History, Geography & Civics</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">25K+</div>
            <div className="text-gray-400">Students Taught</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">99%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </main>

      {/* Developer Credit Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-2xl border border-cyan-400/30 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">AA</span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Developed & Designed by
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Abhishek Aryan
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>💻</span>
              <span>Crafted with passion and innovation</span>
              <span>✨</span>
            </div>
            <div className="mt-6">
              <p className="text-gray-300 mb-4 max-w-md mx-auto text-center">
                🎆 <strong>Impressed by this work?</strong> Your support fuels more innovative projects! Every contribution, even ₹1, motivates me to build better experiences! 🚀
              </p>
              <Link 
                href="/qr"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/25"
              >
                <span className="text-xl">💖</span>
                <span>Support Developer</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}