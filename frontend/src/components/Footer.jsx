// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-12 py-4 bg-blue-600 text-white text-center">
      &copy; {new Date().getFullYear()} EduTrack. All rights reserved.
    </footer>
  );
};

export default Footer;
