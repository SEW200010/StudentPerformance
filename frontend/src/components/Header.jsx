import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title, subtitle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-blue-600 shadow-sm px-8 py-2 flex justify-between items-center">
      <div>
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-white">
          {subtitle}
        </p>
      </div>
<Link to ="/option">
      <button className="bg-white text-xl font-bold border px-4 py-2 rounded-lg hover:bg-white">
        Logout
      </button></Link>
    </header>
  );
}
