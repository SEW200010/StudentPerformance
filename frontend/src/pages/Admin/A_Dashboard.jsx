import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const stats = [
  { title: "Total Students", value: "4", icon: "👥" },
  { title: "Average Attendance", value: "84%", icon: "📅" },
  { title: "Average GPA", value: "2.88", icon: "🎓" },
  { title: "Total Subjects", value: "5", icon: "📚" },
];

const students = [
  {
    name: "Alice Johnson",
    email: "alice@school.com",
    class: "class-1",
    gpa: "3.50",
    attendance: "100%",
    color: "text-green-600",
    Mathematics: "85",
    Science: "78",
    English: "92",
    Average: "83.6"
  },
  {
    name: "Bob Smith",
    email: "bob@school.com",
    class: "class-1",
    gpa: "3.00",
    attendance: "93%",
    color: "text-green-600",
    Mathematics: "81",
    Science: "70",
    English: "90",
    Average: "70.1"
  },
  {
    name: "Charlie Brown",
    email: "charlie@school.com",
    class: "class-1",
    gpa: "3.50",
    attendance: "90%",
    color: "text-green-600",
    Mathematics: "90",
    Science: "68",
    English: "82",
    Average: "88.4"
  },
  {
    name: "Diana Prince",
    email: "diana@school.com",
    class: "class-1",
    gpa: "1.50",
    attendance: "53%",
    color: "text-red-600",
    Mathematics: "65",
    Science: "48",
    English: "12",
    Average: "43.0"
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('allStudents');

  return (
    <div className="bg-gray-100">
      <Header title="Admin Dashboard" subtitle="Welcome back, Admin" />
              <main className="min-h-screen p-18">
                <div className="max-w-7xl mx-auto">
      
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#2EC4A6] p-6 h-[200px] rounded-xl shadow-sm flex justify-between items-center hover:scale-90"
              >
                <div>
                  <p className="text-white text-xl font-semibold">
                    {item.title}
                  </p>
                  <h2 className="text-3xl font-bold text-white">
                    {item.value}
                  </h2>
                </div>
                <span className="text-6xl">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-full text-xl font-medium ${
                activeTab === 'allStudents' ? 'bg-gray-200' : 'text-gray-500 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('allStudents')}
            >
              All Students
            </button>
            <button
              className={`px-4 py-2 rounded-full text-xl font-medium ${
                activeTab === 'performance' ? 'bg-gray-200' : 'text-gray-500 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('performance')}
            >
              Performance Overview
            </button>
          </div>

          {/* Student Table */}
          {activeTab === 'allStudents' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-1">Student List</h2>
              <p className="text-gray-500 text-m mb-4">
                View all registered students and their details
              </p>

              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Student Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>GPA</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="py-3">{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.class}</td>
                      <td>{student.gpa}</td>
                      <td className={student.color}>
                        {student.attendance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-1">Student Performance</h2>
              <p className="text-gray-500 text-m mb-4">
                Student performance across all subjects
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Student Name</th>
                    <th>Mathematics</th>
                    <th>Science</th>
                    <th>English</th>
                    <th>Average</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="py-3">{student.name}</td>
                      <td>{student.Mathematics}</td>
                      <td>{student.Science}</td>
                      <td>{student.English}</td>
                      <td>{student.Average}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
