import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/* ===================== SAMPLE DATA ===================== */
const attendanceData = [
  { name: "Alice Johnson", attendance: 97, status: "Absent" },
  { name: "Bob Smith", attendance: 70, status: "Present" },
  { name: "Charlie Brown", attendance: 93, status: "Present" },
  { name: "Diana Prince", attendance: 53, status: "Present" },
];

const marksData = [
  { student: "Alice Johnson", subject: "Geography", marks: "75/100", exam: "Mid-term", date: "1/19/2024" },
  { student: "Bob Smith", subject: "Geography", marks: "70/100", exam: "Mid-term", date: "1/19/2024" },
  { student: "Charlie Brown", subject: "Geography", marks: "87/100", exam: "Mid-term", date: "1/19/2024" },
  { student: "Diana Prince", subject: "Geography", marks: "45/100", exam: "Mid-term", date: "1/19/2024" },
  { student: "Alice Johnson", subject: "History", marks: "88/100", exam: "Mid-term", date: "1/18/2024" },
  { student: "Bob Smith", subject: "History", marks: "65/100", exam: "Mid-term", date: "1/18/2024" },
];

const performanceData = [
  { name: "Alice Johnson", avg: "84%", attendance: "100%", status: "Good" },
  { name: "Bob Smith", avg: "71%", attendance: "73%", status: "Fair" },
  { name: "Charlie Brown", avg: "88%", attendance: "90%", status: "Good" },
  { name: "Diana Prince", avg: "43%", attendance: "67%", status: "Needs Improvement" },
];

/* ===================== COMPONENT ===================== */
export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("markAttendance");
  const [students, setStudents] = useState(attendanceData);
  const [marksList, setMarksList] = useState(marksData);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    student: "",
    subject: "",
    marks: "",
    exam: "",
    date: "",
  });

  const today = new Date().toLocaleDateString();

  const updateStatus = (index, status) => {
    const updated = [...students];
    updated[index].status = status;
    setStudents(updated);
  };

  return (
    <div className="bg-gray-100">
      <Header title="Teacher Dashboard" subtitle="Welcome back, Teacher" />
      <main className="min-h-screen p-18">
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex gap-4 mt-8 px-6">
            {["markAttendance", "manageMarks", "classPerformance"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === tab
                    ? "bg-gray-200"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                {tab === "markAttendance" && "Mark Attendance"}
                {tab === "manageMarks" && "Manage Marks"}
                {tab === "classPerformance" && "Class Performance"}
              </button>
            ))}
          </div>

          {/* ===================== MARK ATTENDANCE ===================== */}
          {activeTab === "markAttendance" && (
            <div className="bg-white rounded-xl shadow-sm p-6 m-6">
              <h2 className="text-lg font-semibold">Mark Daily Attendance</h2>
              <p className="text-gray-500 mb-4">Today's date: {today}</p>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-2">Student Name</th>
                    <th>Attendance %</th>
                    <th>Today's Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-3">{s.name}</td>
                      <td className={s.attendance >= 75 ? "text-green-600" : "text-red-600"}>
                        {s.attendance}%
                      </td>
                      <td className={s.status === "Present" ? "text-green-600" : "text-red-600"}>
                        {s.status}
                      </td>
                      <td className="flex gap-2 py-2">
                        <button
                          onClick={() => updateStatus(i, "Present")}
                          className={`px-3 py-1 rounded-md border ${s.status === "Present" ? "bg-black text-white" : ""}`}
                        >
                          ✓ Present
                        </button>
                        <button
                          onClick={() => updateStatus(i, "Absent")}
                          className={`px-3 py-1 rounded-md border ${s.status === "Absent" ? "bg-red-600 text-white" : ""}`}
                        >
                          ✕ Absent
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ===================== MANAGE MARKS ===================== */}
          {activeTab === "manageMarks" && (
            <div className="bg-white rounded-xl shadow-sm p-6 m-6">

              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold">Student Marks</h2>
                  <p className="text-gray-500 text-sm">Add and update student marks</p>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-black text-white px-4 py-2 rounded-md"
                >
                  + Add Marks
                </button>
              </div>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-2">Student Name</th>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Exam Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {marksList.map((mark, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-2">{mark.student}</td>
                      <td>{mark.subject}</td>
                      <td>{mark.marks}</td>
                      <td>{mark.exam}</td>
                      <td>{mark.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ===================== ADD MARK TABLE OVERLAY ===================== */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="bg-white rounded-xl shadow-lg w-[600px] p-6 pointer-events-auto">
                <h2 className="text-lg font-semibold mb-4">Add Student Marks</h2>

                <table className="w-full text-sm mb-4">
                  <tbody>
                    {["student", "subject", "marks", "exam"].map((field) => (
                      <tr key={field} className="border-b">
                        <td className="py-2 font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</td>
                        <td className="py-2">
                          <input
                            type="text"
                            placeholder={field === "marks" ? "e.g. 85/100" : ""}
                            className="w-full border p-2 rounded"
                            value={formData[field]}
                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b">
                      <td className="py-2 font-medium">Date</td>
                      <td className="py-2">
                        <input
                          type="date"
                          className="w-full border p-2 rounded"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setMarksList([...marksList, formData]);
                      setFormData({ student: "", subject: "", marks: "", exam: "", date: "" });
                      setShowModal(false);
                    }}
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===================== CLASS PERFORMANCE ===================== */}
          {activeTab === "classPerformance" && (
            <div className="bg-white rounded-xl shadow-sm p-6 m-6">
              <h2 className="text-lg font-semibold">Class Performance Overview</h2>
              <p className="text-gray-500 text-sm mb-4">View overall class performance</p>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th>Student Name</th>
                    <th>Average Score</th>
                    <th>Attendance %</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((p, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-2">{p.name}</td>
                      <td>{p.avg}</td>
                      <td className={parseInt(p.attendance) >= 75 ? "text-green-600" : "text-red-600"}>
                        {p.attendance}
                      </td>
                      <td className={
                        p.status === "Good"
                          ? "text-green-600"
                          : p.status === "Fair"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }>
                        {p.status}
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
