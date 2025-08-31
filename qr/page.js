"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function QRDonation() {
  const [copied, setCopied] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    document.title = "Support Developer - Next Toppers";
  }, []);

  const upiId = "aartikumari28-1@okaxis";

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>



      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Support the Developer
            </h1>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce delay-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            🎆 Your support fuels innovation and helps create more amazing projects! 🚀
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-lg">
            <div className="flex items-center space-x-2 text-green-400">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Instant Transfer</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
              <span>UPI Enabled</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-white/10 to-gray-900/50 rounded-3xl p-8 border border-white/20 backdrop-blur-sm shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                📱 Scan & Pay
              </h2>
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-2xl blur opacity-75 animate-pulse"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                  <Image
                    src="/mummy QR (croped).jpg"
                    alt="Payment QR Code"
                    width={280}
                    height={280}
                    className="mx-auto rounded-xl"
                  />
                </div>
              </div>
              <p className="text-gray-300 mt-6 text-lg">
                📲 Open any UPI app and scan this QR code
              </p>
              
              {/* UPI ID */}
              <div className="mt-8 bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                <p className="text-gray-400 mb-2">Or pay directly to UPI ID:</p>
                <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                  <span className="text-cyan-400 font-mono text-lg">{upiId}</span>
                  <button
                    onClick={copyUPI}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
                  >
                    {copied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Support Message & Amount */}
          <div className="space-y-8">
            {/* Developer Message */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-400/30 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Abhishek Aryan</h3>
                  <p className="text-gray-300">Full Stack Developer</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border-l-4 border-purple-400">
                <p className="text-gray-300 text-lg leading-relaxed">
                  🙏 Thank you for considering supporting my work! Every contribution, no matter how small, 
                  motivates me to create better projects and helps me continue building amazing web experiences. 
                  Your support means everything to me! 🚀✨
                </p>
              </div>
            </div>



            {/* Thank You Message */}
            {showThankYou && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/50 backdrop-blur-sm animate-pulse">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your support is greatly appreciated! 🙏✨</p>
                </div>
              </div>
            )}

            {/* Payment Apps */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">📱 Supported Payment Apps</h3>
              <div className="grid grid-cols-5 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <Image
                    src="https://liquiddesigns.in/wp-content/uploads/2017/05/03-PaytmLogo.jpg"
                    alt="PayTM"
                    width={32}
                    height={32}
                    className="mx-auto mb-1 rounded object-contain"
                  />
                  <p className="text-xs text-gray-400">PayTM</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <Image
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png"
                    alt="GPay"
                    width={32}
                    height={32}
                    className="mx-auto mb-1 rounded object-contain"
                  />
                  <p className="text-xs text-gray-400">GPay</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
                    alt="PhonePe"
                    width={32}
                    height={32}
                    className="mx-auto mb-1 rounded object-contain"
                  />
                  <p className="text-xs text-gray-400">PhonePe</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-2xl mb-1">📱</div>
                  <p className="text-xs text-gray-400">Any UPI App</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-2xl mb-1">🏦</div>
                  <p className="text-xs text-gray-400">Banking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Contact */}
        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Contact</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
