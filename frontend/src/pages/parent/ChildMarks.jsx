import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { Bell, CheckCircle } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const ChildMarks = () => {
  const [activeTab, setActiveTab] = useState("marks");
  return (
    <div className="bg-gray-100">
              <Header title="Parent Dashboard" subtitle="Welcome back, Parent" />
              <main className="min-h-screen p-18">
                <div className="max-w-7xl mx-auto">
      {/* Child Information */}
      <div className="bg-white rounded-xl shadow-sm p-6 mt-8 mb-6">
        <h2 className="font-semibold mb-4">Child Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium">Alice Johnson</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">alice@school.com</p>
          </div>
          <div>
            <p className="text-gray-500">Class</p>
            <p className="font-medium">Class-1</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* GPA */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium mb-2">GPA</h3>
          <p className="text-2xl font-bold">3.50</p>
          <p className="text-xs text-gray-500">Out of 4.0</p>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium mb-2">Attendance</h3>
          <p className="text-2xl font-bold text-green-600 mb-2">93%</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "93%" }}
            ></div>
          </div>
        </div>

        {/* Average Score */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium mb-2">Average Score</h3>
          <p className="text-2xl font-bold">83.6%</p>
          <p className="text-xs text-gray-500">Across all subjects</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-4 text-sm font-medium">
        <button
          onClick={() => setActiveTab("marks")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "marks" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Marks
        </button>
        <button
          onClick={() => setActiveTab("attendance")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "attendance" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Attendance
        </button>
        <button
          onClick={() => setActiveTab("performance")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "performance" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Performance Charts
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-3 py-1 rounded-full ${
            activeTab === "notifications" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          Notifications
        </button>
      </div>

      {/* Marks Tab */}
      {activeTab === "marks" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-1">Subject-wise Marks</h3>
          <p className="text-sm text-gray-500 mb-4">
            View Alice Johnson's marks across all subjects
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-600">
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Marks</th>
                  <th className="pb-3">Percentage</th>
                  <th className="pb-3">Grade</th>
                  <th className="pb-3">Exam Type</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Mathematics", "85/100", "85.0%", "A", "Mid-term", "1/15/2024"],
                  ["Science", "78/100", "78.0%", "B", "Mid-term", "1/16/2024"],
                  ["English", "92/100", "92.0%", "A+", "Mid-term", "1/17/2024"],
                  ["History", "88/100", "88.0%", "A", "Mid-term", "1/18/2024"],
                  ["Geography", "75/100", "75.0%", "B", "Mid-term", "1/19/2024"],
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="py-3">{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className="text-green-600">{row[2]}</td>
                    <td>
                      <span className="bg-black text-white px-2 py-1 rounded-full text-xs">
                        {row[3]}
                      </span>
                    </td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Attendance Tab */}
      {activeTab === "attendance" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-1">Attendance Details</h3>
          <p className="text-sm text-gray-500 mb-4">
            View Alice Johnson's attendance record
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-600">
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Subject</th>
                  <th className="pb-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1/15/2024", "Present", "Mathematics", "9:00 AM"],
                  ["1/16/2024", "Present", "Science", "10:00 AM"],
                  ["1/17/2024", "Absent", "English", "11:00 AM"],
                  ["1/18/2024", "Present", "History", "1:00 PM"],
                  ["1/19/2024", "Present", "Geography", "2:00 PM"],
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="py-3">{row[0]}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row[1] === "Present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row[1]}
                      </span>
                    </td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Performance Charts Tab */}
      {activeTab === "performance" && (
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Subject-wise Performance */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-1">Subject-wise Performance</h3>
              <p className="text-sm text-gray-500 mb-4">
                Bar chart showing marks by subject
              </p>
              <Bar
                data={{
                  labels: ["Mathematics", "Science", "English", "History", "Geography"],
                  datasets: [
                    {
                      label: "Marks",
                      data: [85, 78, 92, 88, 75],
                      backgroundColor: "#3B82F6",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>

            {/* Attendance Distribution */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-1">Attendance Distribution</h3>
              <p className="text-sm text-gray-500 mb-4">
                Pie chart showing attendance breakdown
              </p>
              <Pie
                data={{
                  labels: ["Present", "Absent"],
                  datasets: [
                    {
                      data: [93, 7],
                      backgroundColor: ["#10B981", "#EF4444"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "right" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-1">Notifications</h2>
          <p className="text-sm text-gray-500 mb-5">
            Important updates about Alice Johnson's performance
          </p>

          {/* Notification Item */}
          <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
            <div className="flex gap-3">
              <Bell className="text-blue-600 mt-1" size={18} />
              <div>
                <p className="text-sm font-medium">
                  Your child Alice has excellent attendance (95%)
                </p>
                <p className="text-xs text-gray-500">1/20/2024</p>
              </div>
            </div>
            <CheckCircle className="text-gray-500" size={18} />
          </div>

          {/* Email Notification Settings */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Bell size={16} />
              <h3 className="font-semibold text-sm">
                Email Notification Settings
              </h3>
            </div>

            <p className="text-sm mb-2">
              You will receive email notifications when:
            </p>

            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Attendance drops below 75%</li>
              <li>Marks fall below passing threshold (40%)</li>
              <li>Important announcements from teachers</li>
            </ul>
          </div>
        </div>
      )}
        </div>
      </main>
  <Footer />
    </div>
  );
};

export default ChildMarks;
