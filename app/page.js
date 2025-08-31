"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    document.title = "Next Toppers - Home";
  }, []);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Neon Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-cyan-400 rotate-45 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-pink-400 rotate-12 opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">

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
              style={{ objectPosition: 'center', clipPath: 'inset(5px)' }}
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
            <Link href="/" className="text-cyan-400 font-medium">Home</Link>
            <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
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
              <Link href="/" className="block text-cyan-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/courses" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
              <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/login" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
            ⚡ Next-Gen Learning Platform
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              NEXT TOPPERS
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered learning system for grades 9-12. Master concepts with our expert teachers and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/login" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/25 border border-cyan-400/50 text-center">
              START LEARNING
            </Link>
            <Link href="/about" className="px-10 py-4 border-2 border-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 text-cyan-400 text-center">
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Grade 9 */}
          <Link href="/courses" className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 cursor-pointer">
            <div className="relative">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/152792333113_9th%20aarambh%202.0%20banner%20app.jpg"
                alt="Grade 9 Course"
                width={300}
                height={200}
                className="object-cover rounded-t-2xl w-full h-48"
              />
            </div>
            <div className="p-4 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Grade 9th - Aarambh 2.0</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">SN</div>
                  <span>Shobit Nirwan - Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">PK</div>
                  <span>Prashant Kirad - Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">DS</div>
                  <span>Digraj Sir - SST</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grade 10 */}
          <Link href="/courses" className="group relative overflow-hidden rounded-2xl border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/25 cursor-pointer">
            <div className="relative">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/538903229246_aarambh%20banner%20app.jpg"
                alt="Grade 10 Course"
                width={300}
                height={200}
                className="object-cover rounded-t-2xl w-full h-48"
              />
            </div>
            <div className="p-4 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Grade 10th - Aarambh</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">SN</div>
                  <span>Shobit Nirwan - Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">PK</div>
                  <span>Prashant Kirad - Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">DS</div>
                  <span>Digraj Sir - SST</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grade 11 Science */}
          <Link href="/courses" className="group relative overflow-hidden rounded-2xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 cursor-pointer">
            <div className="relative">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/183130728609_Prarambh%20BATCh%20Science%20Class%2011.png"
                alt="Grade 11 Science Course"
                width={300}
                height={200}
                className="object-cover rounded-t-2xl w-full h-48"
              />
            </div>
            <div className="p-4 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-xl font-bold mb-3 text-green-400">Grade 11th - Science</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">SN</div>
                  <span>Shobit Nirwan - Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">PK</div>
                  <span>Prashant Kirad - Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">DS</div>
                  <span>Digraj Sir - SST</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grade 11 Humanities */}
          <Link href="/courses" className="group relative overflow-hidden rounded-2xl border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 cursor-pointer">
            <div className="relative">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/407786128517_11th%20prarambh%20hum%20app%20final%203499%20%281%29.jpg"
                alt="Grade 11 Humanities Course"
                width={300}
                height={200}
                className="object-cover rounded-t-2xl w-full h-48"
              />
            </div>
            <div className="p-4 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Grade 11th - Humanities</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">SN</div>
                  <span>Shobit Nirwan - Maths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">PK</div>
                  <span>Prashant Kirad - Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">DS</div>
                  <span>Digraj Sir - SST</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-800">
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">250K+</div>
            <div className="text-gray-400">Active Students</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
            <div className="text-gray-400">Expert Teachers</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-gray-400">AI Support</div>
          </div>
        </div>
      </main>

      {/* Developer Credit Footer */}
      <footer className="relative z-10 border-t border-gray-800/30">
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
                🎆 <strong>Love this website?</strong> Your support helps me create more amazing projects and keeps innovation alive! Even ₹1 makes a huge difference! 🚀
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
    </div>
  );
}
