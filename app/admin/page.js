"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [blockedStudents, setBlockedStudents] = useState(new Set());
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [chapterLectures, setChapterLectures] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "Next Toppers - Admin Panel";
    const checkAuth = () => {
      const adminAuth = localStorage.getItem('adminAuthenticated');
      if (adminAuth === 'true') {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);

  const toggleStudentBlock = (studentName) => {
    setBlockedStudents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(studentName)) {
        newSet.delete(studentName);
      } else {
        newSet.add(studentName);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const students = [
    "Rahul Sharma", "Priya Patel", "Arjun Singh", "Sneha Gupta", "Vikash Kumar", "Ananya Joshi", "Rohit Verma", "Kavya Reddy", "Aditya Mishra", "Ishita Agarwal", "Karan Mehta", "Neha Yadav", "Siddharth Roy", "Pooja Nair", "Harsh Bansal", "Riya Kapoor", "Akash Jain", "Divya Sinha", "Manish Tiwari", "Shreya Das", "Varun Khanna", "Tanvi Shah", "Deepak Pandey", "Sakshi Bhatt", "Nikhil Saxena", "Aditi Malhotra", "Gaurav Chopra", "Megha Iyer", "Rajesh Kumar", "Simran Kaur", "Abhay Singh", "Kritika Joshi", "Yash Agarwal", "Nisha Gupta", "Aryan Sharma", "Pallavi Reddy", "Rohit Mishra", "Swati Verma", "Kunal Bansal", "Ritika Nair", "Vishal Yadav", "Anjali Kapoor", "Saurabh Jain", "Preeti Sinha", "Mohit Tiwari", "Shweta Das", "Tarun Khanna", "Priyanka Shah", "Ankit Pandey", "Deepika Bhatt", "Rahul Saxena", "Kavita Malhotra", "Sumit Chopra", "Aarti Iyer"
  ];

  const grades = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const courses = ["Aarambh 2.0", "Aarambh", "Science", "Commerce", "Arts"];

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
            <span className="text-xl font-bold text-cyan-400">Admin Panel</span>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem('adminAuthenticated');
              router.push('/login');
            }}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 min-h-screen p-6">
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === "dashboard" ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === "students" ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              👥 Students
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === "courses" ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              📚 Courses
            </button>
            <button
              onClick={() => setActiveTab("teachers")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === "teachers" ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              👨🏫 Teachers
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeTab === "schedule" ? "bg-cyan-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              📅 Schedule
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "dashboard" && (
            <div>
              <h1 className="text-3xl font-bold text-cyan-400 mb-8">Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-cyan-400/30">
                  <h3 className="text-cyan-400 text-lg font-semibold">Total Students</h3>
                  <p className="text-3xl font-bold text-white mt-2">600k</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-green-400/30">
                  <h3 className="text-green-400 text-lg font-semibold">Active Courses</h3>
                  <p className="text-3xl font-bold text-white mt-2">4</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-pink-400/30">
                  <h3 className="text-pink-400 text-lg font-semibold">Teachers</h3>
                  <p className="text-3xl font-bold text-white mt-2">20+</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-purple-400/30">
                  <h3 className="text-purple-400 text-lg font-semibold">Completion Rate</h3>
                  <p className="text-3xl font-bold text-white mt-2">79%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div>
              <h1 className="text-3xl font-bold text-cyan-400 mb-8">Students Management</h1>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-cyan-400">Name</th>
                      <th className="px-6 py-3 text-left text-cyan-400">Grade</th>
                      <th className="px-6 py-3 text-left text-cyan-400">Course</th>
                      <th className="px-6 py-3 text-left text-cyan-400">Status</th>
                      <th className="px-6 py-3 text-left text-cyan-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.filter(student => 
                      student.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((student, index) => {
                      const originalIndex = students.indexOf(student);
                      return (
                        <tr key={student} className={`border-b border-gray-700 ${blockedStudents.has(student) ? 'opacity-50' : ''}`}>
                          <td className="px-6 py-4 text-white">{student}</td>
                          <td className="px-6 py-4 text-gray-300">{grades[originalIndex % grades.length]}</td>
                          <td className="px-6 py-4 text-gray-300">{courses[originalIndex % courses.length]}</td>
                          <td className="px-6 py-4">
                            <span className={blockedStudents.has(student) ? 'text-red-400' : 'text-green-400'}>
                              {blockedStudents.has(student) ? 'Blocked' : 'Online'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => toggleStudentBlock(student)} 
                              className={`px-3 py-1 text-white rounded ${blockedStudents.has(student) ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                            >
                              {blockedStudents.has(student) ? 'Unblock' : 'Block'}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div>
              {!selectedCourse ? (
                <div>
                  <h1 className="text-3xl font-bold text-cyan-400 mb-8">Courses Management</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-400/30 cursor-pointer hover:border-cyan-400" onClick={() => setSelectedCourse('aarambh2')}>
                      <h3 className="text-cyan-400 text-xl font-bold mb-2">Grade 9 - Aarambh 2.0</h3>
                      <p className="text-gray-300 mb-4">Foundation course for Class 9</p>
                      <p className="text-white">Students: 285k</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-pink-400/30 cursor-pointer hover:border-pink-400" onClick={() => setSelectedCourse('aarambh')}>
                      <h3 className="text-pink-400 text-xl font-bold mb-2">Grade 10 - Aarambh</h3>
                      <p className="text-gray-300 mb-4">Board exam preparation</p>
                      <p className="text-white">Students: 397k</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-green-400/30 cursor-pointer hover:border-green-400" onClick={() => setSelectedCourse('science')}>
                      <h3 className="text-green-400 text-xl font-bold mb-2">Grade 11 - Science</h3>
                      <p className="text-gray-300 mb-4">JEE/NEET preparation</p>
                      <p className="text-white">Students: 122k</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center mb-8">
                    <button onClick={() => setSelectedCourse(null)} className="mr-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">← Back</button>
                    <h1 className="text-3xl font-bold text-cyan-400">
                      {selectedCourse === 'aarambh2' && 'Grade 9 - Aarambh 2.0'}
                      {selectedCourse === 'aarambh' && 'Grade 10 - Aarambh'}
                      {selectedCourse === 'science' && 'Grade 11 - Science'}
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg border border-red-400/30">
                      <h3 className="text-red-400 text-xl font-bold mb-4 flex items-center">🔴 Go Live</h3>
                      <p className="text-gray-300 mb-4">Start a live class session</p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Start Live Class</button>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-blue-400/30">
                      <h3 className="text-blue-400 text-xl font-bold mb-4 flex items-center">📄 Upload Notes/DPP</h3>
                      <p className="text-gray-300 mb-4">Upload study materials and practice papers</p>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Upload Files</button>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/30">
                      <h3 className="text-yellow-400 text-xl font-bold mb-4 flex items-center">📝 Create Test</h3>
                      <p className="text-gray-300 mb-4">Create and schedule tests for students</p>
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Create New Test</button>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-purple-400/30">
                      <h3 className="text-purple-400 text-xl font-bold mb-4 flex items-center">📢 Make Announcement</h3>
                      <p className="text-gray-300 mb-4">Send important updates to all students</p>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Create Announcement</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h1 className="text-3xl font-bold text-cyan-400 mb-8">Schedule Live Classes</h1>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8">
                <h2 className="text-xl font-bold text-white mb-6">Create New Live Class</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Class Title</label>
                    <input type="text" placeholder="Enter class title" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none">
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>Social Studies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Grade</label>
                    <select className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none">
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                      <option>Grade 11</option>
                      <option>Grade 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Teacher</label>
                    <select className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none">
                      <option>Shobit Nirwan</option>
                      <option>Prashant Kirad</option>
                      <option>Digraj Sir</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Time</label>
                    <input type="time" className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none" />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-gray-300 mb-2">Description</label>
                  <textarea placeholder="Class description..." className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none h-24"></textarea>
                </div>
                <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-semibold">Schedule Live Class</button>
              </div>
              <div className="bg-gray-900 rounded-lg border border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">Scheduled Classes</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-cyan-400/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-cyan-400 font-bold">Algebra Basics - Grade 10</h3>
                          <p className="text-gray-300">Teacher: Shobit Nirwan</p>
                          <p className="text-gray-400 text-sm">Sep 7, 2025 at 5:00 PM</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Start</button>
                          <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Cancel</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border border-green-400/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-green-400 font-bold">Chemical Reactions - Grade 10</h3>
                          <p className="text-gray-300">Teacher: Prashant Kirad</p>
                          <p className="text-gray-400 text-sm">Sep 7, 2025 at 8:00 PM</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Start</button>
                          <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Cancel</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg border border-purple-400/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-purple-400 font-bold">Indian History - Grade 12</h3>
                          <p className="text-gray-300">Teacher: Digraj Sir</p>
                          <p className="text-gray-400 text-sm">Sep 7, 2025 at 4:00 PM</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Start</button>
                          <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "teachers" && (
            <div>
              {!selectedTeacher ? (
                <div>
                  <h1 className="text-3xl font-bold text-cyan-400 mb-8">Teachers Management</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg border border-cyan-400/30 text-center cursor-pointer hover:border-cyan-400" onClick={() => setSelectedTeacher('shobit')}>
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">SN</div>
                      <h3 className="text-cyan-400 text-xl font-bold mb-2">Shobit Nirwan</h3>
                      <p className="text-gray-300">Mathematics Expert</p>
                      <p className="text-white mt-2">Students: 600k</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-green-400/30 text-center cursor-pointer hover:border-green-400" onClick={() => setSelectedTeacher('prashant')}>
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">PK</div>
                      <h3 className="text-green-400 text-xl font-bold mb-2">Prashant Kirad</h3>
                      <p className="text-gray-300">Science Specialist</p>
                      <p className="text-white mt-2">Students: 600k</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-purple-400/30 text-center cursor-pointer hover:border-purple-400" onClick={() => setSelectedTeacher('digraj')}>
                      <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">DS</div>
                      <h3 className="text-purple-400 text-xl font-bold mb-2">Digraj Sir</h3>
                      <p className="text-gray-300">Social Studies Expert</p>
                      <p className="text-white mt-2">Students: 600k</p>
                    </div>
                  </div>
                </div>
              ) : !selectedClass ? (
                <div>
                  <div className="flex items-center mb-8">
                    <button onClick={() => setSelectedTeacher(null)} className="mr-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">← Back</button>
                    <h1 className="text-3xl font-bold text-cyan-400">
                      {selectedTeacher === 'shobit' && 'Mathematics - Shobit Nirwan'}
                      {selectedTeacher === 'prashant' && 'Science - Prashant Kirad'}
                      {selectedTeacher === 'digraj' && 'Social Studies - Digraj Sir'}
                    </h1>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Select Class:</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Class 9', 'Class 10', 'Class 11', 'Class 12'].map(cls => (
                        <button key={cls} onClick={() => setSelectedClass(cls)} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 border border-gray-600">{cls}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : !selectedChapter ? (
                <div>
                  <div className="flex items-center mb-8">
                    <button onClick={() => setSelectedClass(null)} className="mr-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">← Back</button>
                    <h1 className="text-3xl font-bold text-cyan-400">
                      {selectedTeacher === 'shobit' && `Mathematics - ${selectedClass} - Shobit Nirwan`}
                      {selectedTeacher === 'prashant' && `Science - ${selectedClass} - Prashant Kirad`}
                      {selectedTeacher === 'digraj' && `Social Studies - ${selectedClass} - Digraj Sir`}
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedTeacher === 'shobit' && (() => {
                      let chapters = [];
                      if (selectedClass === 'Class 9') {
                        chapters = [
                          { name: 'Numeral System', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Polynomials', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Coordinate Geometry', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Linear Equations', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Euclidean Geometry', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Lines and Angles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Triangles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Quadrilateral', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Areas of Parallelograms and Triangles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Circles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Constructions', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Heron\'s Formula', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Surface Areas and Volumes', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Statistics', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Probability', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 10') {
                        chapters = [
                          { name: 'Real Numbers', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Polynomials', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Pair of Linear Equations', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Quadratic Equations', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Arithmetic Progressions', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Triangles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Coordinate Geometry', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Introduction to Trigonometry', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Applications of Trigonometry', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Circles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Constructions', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Areas Related to Circles', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Surface Areas and Volumes', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Statistics', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Probability', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 11') {
                        chapters = [
                          { name: 'Sets', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Relations and Functions', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Trigonometric Functions', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Complex Numbers', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Linear Inequalities', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Permutations and Combinations', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Binomial Theorem', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Sequences and Series', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Straight Lines', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Conic Sections', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Introduction to 3D Geometry', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Limits and Derivatives', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Mathematical Reasoning', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Statistics', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Probability', lectures: Math.floor(Math.random() * 10) + 8 }
                        ];
                      } else if (selectedClass === 'Class 12') {
                        chapters = [
                          { name: 'Relations and Functions', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Inverse Trigonometric Functions', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Matrices', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Determinants', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Continuity and Differentiability', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Application of Derivatives', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Integrals', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Application of Integrals', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Differential Equations', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Vector Algebra', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Three Dimensional Geometry', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Linear Programming', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Probability', lectures: Math.floor(Math.random() * 12) + 10 }
                        ];
                      }
                      return chapters.map(chapter => (
                        <div key={chapter.name} className="bg-gray-900 p-6 rounded-lg border border-cyan-400/30 cursor-pointer hover:border-cyan-400" onClick={() => {
                          setSelectedChapter(chapter.name);
                          setChapterLectures({...chapterLectures, [chapter.name]: chapter.lectures});
                        }}>
                          <h3 className="text-cyan-400 text-xl font-bold mb-2">{chapter.name}</h3>
                          <p className="text-gray-300">{chapter.lectures} Lectures</p>
                        </div>
                      ));
                    })()}
                    {selectedTeacher === 'prashant' && (() => {
                      let chapters = [];
                      if (selectedClass === 'Class 9') {
                        chapters = [
                          { name: 'Matter in our Surroundings', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Is Matter Around us Pure?', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Atoms and Molecules', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Structure of the Atom', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'The Fundamental Unit of Life', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Tissues', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Diversity in Living Organisms', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Motion', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Gravitation', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Work and Energy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Sound', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Why do we Fall Ill', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Natural Resources', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Improvement in Food Resources', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 10') {
                        chapters = [
                          { name: 'Chemical Reactions and Equations', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Acids, Bases and Salts', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Metals and Non-metals', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Carbon and its Compounds', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Periodic Table', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Life Processes', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Control and Coordination', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'How Do Organisms Reproduce', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Heredity', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Light Reflection and Refraction', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'The Human Eye and Colorful World', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Electricity', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Magnetic Effects of Electric Current', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Sources of Energy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Natural Environment', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 11') {
                        chapters = [
                          { name: 'Physics - Mechanics', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Physics - Thermodynamics', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Physics - Waves', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Chemistry - Basic Concepts', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Chemistry - Atomic Structure', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Chemistry - Chemical Bonding', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Biology - Cell Biology', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Biology - Plant Physiology', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Biology - Human Physiology', lectures: Math.floor(Math.random() * 10) + 8 }
                        ];
                      } else if (selectedClass === 'Class 12') {
                        chapters = [
                          { name: 'Physics - Electrostatics', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Physics - Current Electricity', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Physics - Electromagnetic Induction', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Chemistry - Solutions', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Chemistry - Electrochemistry', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Chemistry - Chemical Kinetics', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Biology - Reproduction', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Biology - Genetics', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Biology - Evolution', lectures: Math.floor(Math.random() * 12) + 10 }
                        ];
                      }
                      return chapters.map(chapter => (
                        <div key={chapter.name} className="bg-gray-900 p-6 rounded-lg border border-green-400/30 cursor-pointer hover:border-green-400" onClick={() => {
                          setSelectedChapter(chapter.name);
                          setChapterLectures({...chapterLectures, [chapter.name]: chapter.lectures});
                        }}>
                          <h3 className="text-green-400 text-xl font-bold mb-2">{chapter.name}</h3>
                          <p className="text-gray-300">{chapter.lectures} Lectures</p>
                        </div>
                      ));
                    })()}
                    {selectedTeacher === 'digraj' && (() => {
                      let chapters = [];
                      if (selectedClass === 'Class 9') {
                        chapters = [
                          { name: 'The French Revolution', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Socialism in Europe and Russian Revolution', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Nazism and the Rise of Hitler', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Forest Society and Colonialism', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Pastoralists in the Modern World', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'India - Size and Location', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Physical Features of India', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Drainage', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Climate', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Natural Vegetation and Wildlife', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Population', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'What is Democracy?', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Constitutional Design', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Electoral Politics', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Working of Institutions', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Democratic Rights', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'The Story of Village Palampur', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'People as Resource', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Poverty as a Challenge', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Food Security in India', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 10') {
                        chapters = [
                          { name: 'The Rise of Nationalism in Europe', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Nationalism in India', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'The Making of a Global World', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'The Age of Industrialisation', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Print Culture and the Modern World', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Resources and Development', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Forest and Wildlife Resources', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Water Resources', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Agriculture', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Minerals and Energy Resources', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Manufacturing Industries', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Lifelines of National Economy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Power-sharing', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Federalism', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Gender, Religion, and Caste', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Popular Struggles and Movements', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Outcomes of Democracy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Challenges to Democracy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Development', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Sectors of the Indian Economy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Money and Credit', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Globalisation and the Indian Economy', lectures: Math.floor(Math.random() * 8) + 5 },
                          { name: 'Consumer Rights', lectures: Math.floor(Math.random() * 8) + 5 }
                        ];
                      } else if (selectedClass === 'Class 11') {
                        chapters = [
                          { name: 'History - Ancient India', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'History - Medieval India', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Geography - Physical Geography', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Geography - Human Geography', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Political Science - Constitution', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Political Science - Political Theory', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Economics - Microeconomics', lectures: Math.floor(Math.random() * 10) + 8 },
                          { name: 'Economics - Statistics', lectures: Math.floor(Math.random() * 10) + 8 }
                        ];
                      } else if (selectedClass === 'Class 12') {
                        chapters = [
                          { name: 'History - Modern India', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'History - Contemporary World', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Geography - Human Geography', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Geography - India - People and Economy', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Political Science - Contemporary World Politics', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Political Science - Politics in India', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Economics - Macroeconomics', lectures: Math.floor(Math.random() * 12) + 10 },
                          { name: 'Economics - Indian Economic Development', lectures: Math.floor(Math.random() * 12) + 10 }
                        ];
                      }
                      return chapters.map(chapter => (
                        <div key={chapter.name} className="bg-gray-900 p-6 rounded-lg border border-purple-400/30 cursor-pointer hover:border-purple-400" onClick={() => {
                          setSelectedChapter(chapter.name);
                          setChapterLectures({...chapterLectures, [chapter.name]: chapter.lectures});
                        }}>
                          <h3 className="text-purple-400 text-xl font-bold mb-2">{chapter.name}</h3>
                          <p className="text-gray-300">{chapter.lectures} Lectures</p>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center mb-8">
                    <button onClick={() => setSelectedChapter(null)} className="mr-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">← Back</button>
                    <h1 className="text-3xl font-bold text-cyan-400">{selectedChapter} - {selectedClass} - Lectures</h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({length: chapterLectures[selectedChapter] || 10}, (_, i) => (
                      <div key={i} className={`bg-gray-900 p-6 rounded-lg border ${
                        selectedTeacher === 'shobit' ? 'border-cyan-400/30' : 
                        selectedTeacher === 'prashant' ? 'border-green-400/30' : 'border-purple-400/30'
                      }`}>
                        <h3 className={`text-xl font-bold mb-4 ${
                          selectedTeacher === 'shobit' ? 'text-cyan-400' : 
                          selectedTeacher === 'prashant' ? 'text-green-400' : 'text-purple-400'
                        }`}>L-{i + 1}</h3>
                        <p className="text-gray-300 mb-4">{selectedChapter} Lecture {i + 1}</p>
                        <p className="text-gray-400 text-sm mb-4">Duration: 45 mins</p>
                        <button className={`w-full px-4 py-2 text-white rounded ${
                          selectedTeacher === 'shobit' ? 'bg-cyan-600 hover:bg-cyan-700' : 
                          selectedTeacher === 'prashant' ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
                        }`}>Watch Now</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}