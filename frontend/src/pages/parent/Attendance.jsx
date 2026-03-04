import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Attendance = () => {
  return (
    <div className="bg-gray-100">
      <Header title="Parent Dashboard" subtitle="Welcome back, Parent" />
      <main className="min-h-screen p-18">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
          <p>Attendance page content goes here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Attendance;
