import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const stats = [
  { title: "GPA", value: "3.50", sub: "Out of 4.0", icon: "🎓" },
  { title: "Attendance", value: "97%", sub: "This semester", icon: "📅" },
  { title: "Average Score", value: "83.6%", sub: "All subjects", icon: "📊" },
  { title: "Total Subjects", value: "5", sub: "Enrolled", icon: "📚" },
];

const marks = [
  { subject: "Mathematics", obtained: 85, max: 100, exam: "Mid-term", date: "1/15/2024" },
  { subject: "Science", obtained: 78, max: 100, exam: "Mid-term", date: "1/16/2024" },
  { subject: "English", obtained: 92, max: 100, exam: "Mid-term", date: "1/17/2024" },
  { subject: "History", obtained: 88, max: 100, exam: "Mid-term", date: "1/18/2024" },
  { subject: "Geography", obtained: 75, max: 100, exam: "Mid-term", date: "1/19/2024" },
];

const attendanceData = [
  { date: "12/21/2025", status: "Present" },
  { date: "12/20/2025", status: "Present" },
  { date: "12/19/2025", status: "Present" },
  { date: "12/18/2025", status: "Absent" },
  { date: "12/17/2025", status: "Present" },
  { date: "12/16/2025", status: "Present" },
  { date: "12/15/2025", status: "Present" },
  { date: "12/14/2025", status: "Present" },
  { date: "12/13/2025", status: "Absent" },
  { date: "12/12/2025", status: "Present" },
  { date: "12/11/2025", status: "Absent" },
  { date: "12/10/2025", status: "Present" },
  { date: "12/9/2025", status: "Absent" },
  { date: "12/8/2025", status: "Present" },
  { date: "12/7/2025", status: "Absent" },
];

const totalDays = attendanceData.length;
const presentDays = attendanceData.filter(
  (item) => item.status === "Present"
).length;

const attendancePercentage = Math.round(
  (presentDays / totalDays) * 100
);

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("marks");

  return (
    <div className="bg-gray-100">
          <Header title="Student Dashboard" subtitle="Welcome back, Student" />
          <main className="min-h-screen p-18">
            <div className="max-w-7xl mx-auto">
    
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 h-[120px] md:h-[180px] rounded-xl shadow-sm flex justify-between items-center hover:scale-95 transition"
              >
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    {item.title}
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {item.value}
                  </h2>
                  <p className="text-gray-400 text-sm">{item.sub}</p>
                </div>
                <span className="text-5xl">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-full text-base md:text-lg font-medium ${
                activeTab === "marks"
                  ? "bg-gray-200"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("marks")}
            >
              My Marks
            </button>

            <button
              className={`px-4 py-2 rounded-full text-base md:text-lg font-medium ${
                activeTab === "performance"
                  ? "bg-gray-200"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("performance")}
            >
              Performance Charts
            </button>

            <button
              className={`px-4 py-2 rounded-full text-base md:text-lg font-medium ${
                activeTab === "attendance"
                  ? "bg-gray-200"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("attendance")}
            >
              Attendance Details
            </button>
          </div>

          {/* Marks Table */}
          {activeTab === "marks" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-1">Subject-wise Marks</h2>
              <p className="text-gray-500 text-m mb-4">
                View your marks across all subjects
              </p>

              <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Subject</th>
                    <th>Marks Obtained</th>
                    <th>Max Marks</th>
                    <th>Percentage</th>
                    <th>Exam Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {marks.map((m, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="py-3">{m.subject}</td>
                      <td>{m.obtained}</td>
                      <td>{m.max}</td>
                      <td className="text-green-600 font-semibold">
                        {((m.obtained / m.max)*100).toFixed(1)}%
                      </td>
                      <td>{m.exam}</td>
                      <td>{m.date}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
                </div>
              </div>
          )}

          {/* Performance Charts */}
{activeTab === "performance" && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Subject-wise Performance */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-1">Subject-wise Performance</h2>
      <p className="text-gray-500 text-sm mb-4">
        Bar chart showing marks by subject
      </p>

      <Bar
        data={{
          labels: marks.map((m) => m.subject),
          datasets: [
            {
              label: "Marks",
              data: marks.map((m) => m.obtained),
              backgroundColor: "#3b82f6",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: true } },
          scales: { y: { beginAtZero: true, max: 100 } },
        }}
      />
    </div>
    {/* Attendance Distribution */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-1">Attendance Distribution</h2>
      <p className="text-gray-500 text-sm mb-4">
        Pie chart showing attendance breakdown
      </p>

      <Pie
        data={{
          labels: ["Present", "Absent"],
          datasets: [
            {
              data: [90, 10],
              backgroundColor: ["#10b981", "#ef4444"],
            },
          ],
        }}
      />
    </div>

    {/* Performance Over Time */}
    <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
      <h2 className="text-lg font-semibold mb-1">Performance Over Time</h2>
      <p className="text-gray-500 text-sm mb-4">
        Line chart showing your progress
      </p>

      <Line
        data={{
          labels: marks.map((m) => m.date),
          datasets: [
            {
              label: "Score %",
              data: marks.map((m) =>
                ((m.obtained / m.max) * 100).toFixed(1)
              ),
              borderColor: "#6366f1",
              backgroundColor: "#6366f1",
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: { y: { beginAtZero: true, max: 100 } },
        }}
      />
    </div>

  </div>
)}
{/* Attendance Details */}
{activeTab === "attendance" && (
  <div className="bg-white rounded-xl shadow-sm p-6">

    {/* Header */}
    <h2 className="text-lg font-semibold mb-1">Attendance Record</h2>
    <p className="text-gray-500 text-sm mb-6">
      Your attendance:{" "}
      <span className="font-medium">{attendancePercentage}%</span>{" "}
      ({presentDays} present out of {totalDays} days)
    </p>

    {/* Progress Bar */}
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Attendance Status</span>

        <span
          className={`font-semibold ${
            attendancePercentage >= 75
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {attendancePercentage}%
          <span className="text-xs text-gray-400 ml-1">
            {attendancePercentage >= 75 ? "Good Standing" : "Low Attendance"}
          </span>
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            attendancePercentage >= 75 ? "bg-black" : "bg-red-500"
          }`}
          style={{ width: `${attendancePercentage}%` }}
        ></div>
      </div>
    </div>

    {/* Attendance Table */}
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="pb-2">Date</th>
          <th className="pb-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {attendanceData.map((item, index) => (
          <tr key={index} className="border-b last:border-none">
            <td className="py-3">{item.date}</td>
            <td
              className={`font-medium ${
                item.status === "Present"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {item.status === "Present"
                ? "✓ Present"
                : "✗ Absent"}
            </td>
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
