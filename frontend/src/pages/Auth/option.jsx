import React from "react";
import { GraduationCap, User, Presentation, UserCog } from "lucide-react";
import frontImage from "../../assets/front.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* Top Green Curve */}
      <div className="absolute top-0 left-0 w-full h-[280px] bg-[#2EC4A6] rounded-b-[50%]"></div>

      {/* Logo Circle */}
      <div className="relative mt-[140px] bg-white w-[220px] h-[220px] rounded-full shadow-xl flex items-center justify-center border-4 border-[#2EC4A6] z-10">
        <img
          src={frontImage}
          alt="Creative Readers"
          className="w-[160px]"
        />
      </div>

      {/* Heading */}
      <h2 className="mt-10 text-blue-600 text-center font-semibold text-3xl md:text-4xl">
        Choose your option
      </h2>

      {/* Options Grid */}
      <div className="mt-10 grid grid-cols-2 gap-8">
        
        {/* Student */}
        <div className="flex flex-col items-center">
          <Link to="/login?role=student">
            <button className="w-36 h-36 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg">
              <GraduationCap size={80} color="white" />
            </button>
          </Link>
          <p className="mt-3 text-xl font-bold">Student</p>
        </div>

        {/* Teacher */}
        <div className="flex flex-col items-center">
          <Link to="/login?role=teacher">
            <button className="w-36 h-36 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg">
              <Presentation size={80} color="white" />
            </button>
          </Link>
          <p className="mt-3 text-xl font-bold">Teacher</p>
        </div>

        {/* Parent */}
        <div className="flex flex-col items-center">
          <Link to="/login?role=parent">
            <button className="w-36 h-36 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg">
              <User size={80} color="white" />
            </button>
          </Link>
          <p className="mt-3 text-xl font-bold">Parent</p>
        </div>

        {/* Admin */}
        <div className="flex flex-col items-center">
          <Link to="/login?role=admin">
            <button className="w-36 h-36 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg">
              <UserCog size={80} color="white" />
            </button>
          </Link>
          <p className="mt-3 text-xl font-bold">Admin</p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Option;
