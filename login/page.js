"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState("student");
  const [showSecretId, setShowSecretId] = useState(false);
  const [secretId, setSecretId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    document.title = "Next Toppers - Login";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === "teacher") {
      if (secretId === "0000") {
        localStorage.setItem('adminAuthenticated', 'true');
        router.push("/admin");
      } else {
        alert("Invalid Secret ID!");
      }
    } else {
      if (email && password) {
        alert("Student login functionality coming soon!");
      } else {
        alert("Please fill in all fields!");
      }
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setShowSecretId(type === "teacher");
    setSecretId("");
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
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">Contact</Link>
            <Link href="/login" className="text-cyan-400 font-medium">Login</Link>
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
              <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/login" className="block text-cyan-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Login Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-16">
        <div className="max-w-md w-full">
          {/* Login Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-cyan-400/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-300">Sign in to access your learning dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {userType === "student" && (
                <>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email or Phone</label>
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300"
                      placeholder="Enter your email or phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Password</label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-colors duration-300"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </>
              )}

              {userType === "teacher" && (
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Teacher Secret ID</label>
                  <input 
                    type="password" 
                    value={secretId}
                    onChange={(e) => setSecretId(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-600 rounded-lg focus:border-yellow-400 focus:outline-none text-white transition-colors duration-300"
                    placeholder="Enter teacher secret ID"
                    required
                  />
                  <p className="text-yellow-400 text-sm mt-1">Enter the 4-digit secret ID provided by administration</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-cyan-400 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400" />
                  <span className="ml-2 text-gray-300 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300">
                  Forgot Password?
                </a>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                {userType === "teacher" ? "Login as Teacher" : "Sign In"}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => alert('We are waiting to get approval permission, then we will allow students to log in.')}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-xl mr-2">📱</span>
                  <span>Phone</span>
                </button>
                <button 
                  onClick={() => alert('We are waiting to get approval permission, then we will allow students to log in.')}
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-xl mr-2">🔗</span>
                  <span>Google</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                  Sign up here
                </a>
              </p>
            </div>
          </div>

          {/* Student/Teacher Toggle */}
          <div className="mt-8 bg-gray-900/30 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-center text-gray-300 mb-4">Login As</h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => handleUserTypeChange("student")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  userType === "student" 
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                    : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30"
                }`}
              >
                Student
              </button>
              <button 
                type="button"
                onClick={() => handleUserTypeChange("teacher")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  userType === "teacher" 
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white" 
                    : "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/50 text-pink-400 hover:bg-pink-500/30"
                }`}
              >
                Teacher
              </button>
            </div>
            {userType === "teacher" && (
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-400 text-sm text-center">
                  🔐 Teacher login requires only secret ID (no email/password needed)
                </p>
              </div>
            )}
          </div>


        </div>
      </main>
    </div>
  );
}