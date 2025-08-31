"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Courses() {
  useEffect(() => {
    document.title = "Next Toppers - Courses";
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
            <Link href="/courses" className="text-cyan-400 font-medium">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</Link>
            <Link href="/login" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Login</Link>
          </div>
        </div>
      </nav>

      {/* Courses Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Our Courses
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning programs designed for academic excellence across all grades.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Grade 9 */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
            <div className="relative h-64">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/152792333113_9th%20aarambh%202.0%20banner%20app.jpg"
                alt="Grade 9 Course"
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Grade 9th - Aarambh 2.0</h3>
              <p className="text-gray-300 mb-4">Foundation building program for Class 9 students covering all core subjects.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">M</div>
                  <span>Mathematics - Algebra, Geometry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">S</div>
                  <span>Science - Physics, Chemistry, Biology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">SS</div>
                  <span>Social Studies - History, Geography</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Grade 10 */}
          <div className="group relative overflow-hidden rounded-2xl border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/25">
            <div className="relative h-64">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/538903229246_aarambh%20banner%20app.jpg"
                alt="Grade 10 Course"
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Grade 10th - Aarambh</h3>
              <p className="text-gray-300 mb-4">Board exam preparation with comprehensive coverage of CBSE curriculum.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">M</div>
                  <span>Mathematics - Trigonometry, Statistics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">S</div>
                  <span>Science - Advanced concepts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">SS</div>
                  <span>Social Studies - Civics, Economics</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Grade 11 Science */}
          <div className="group relative overflow-hidden rounded-2xl border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25">
            <div className="relative h-64">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/183130728609_Prarambh%20BATCh%20Science%20Class%2011.png"
                alt="Grade 11 Science Course"
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Grade 11th - Science</h3>
              <p className="text-gray-300 mb-4">Advanced science stream preparation for JEE/NEET aspirants.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">P</div>
                  <span>Physics - Mechanics, Thermodynamics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">C</div>
                  <span>Chemistry - Organic, Inorganic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">M</div>
                  <span>Mathematics - Calculus, Algebra</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Grade 11 Humanities */}
          <div className="group relative overflow-hidden rounded-2xl border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25">
            <div className="relative h-64">
              <Image
                src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/bundle_management/course/407786128517_11th%20prarambh%20hum%20app%20final%203499%20%281%29.jpg"
                alt="Grade 11 Humanities Course"
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6 text-white bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Grade 11th - Humanities</h3>
              <p className="text-gray-300 mb-4">Comprehensive humanities program for arts stream students.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">H</div>
                  <span>History - Ancient & Medieval India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">G</div>
                  <span>Geography - Physical Geography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">PS</div>
                  <span>Political Science - Constitution</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-400/30">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Course Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Comprehensive Study Material</h3>
              <p className="text-gray-300">Well-structured notes and practice questions for all subjects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-pink-400 mb-2">Expert Faculty</h3>
              <p className="text-gray-300">Experienced teachers with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Regular Assessments</h3>
              <p className="text-gray-300">Weekly tests and performance tracking</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}