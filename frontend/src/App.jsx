import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/A_Dashboard";
import TeacherDashboard from "./pages/teacher/T_Dashboard";
import StudentDashboard from "./pages/student/S_Dashboard";
import Front from "./pages/Auth/front";
import Option from "./pages/Auth/option";
import ChildMarks from "./pages/parent/ChildMarks";
import Attendance from "./pages/parent/Attendance";
import PerformanceChart from "./pages/parent/PerformanceChart";
import Notifications from "./pages/parent/Notifications";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />        {/* Landing page */}
        <Route path="/option" element={<Option />} />
        <Route path="/login" element={<Login />} />   {/* Login page */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/parent" element={<ChildMarks />} />
        <Route path="/parent/Attendance" element={<Attendance />} />
        <Route path="/parent/PerformanceChart" element={<PerformanceChart />} />
        <Route path="/parent/Notifications" element={<Notifications />} />

      </Routes>
    </Router>
  );
}

export default App;
