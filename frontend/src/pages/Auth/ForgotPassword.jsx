import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import frontImage from "../../assets/front.png";
import Footer from "../../components/Footer";
import { Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Placeholder for forgot password logic
    alert("Password reset link sent to your email!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative overflow-hidden">

      {/* Top Green Curve */}
      <div className="absolute top-0 left-0 w-full h-[280px] bg-[#2EC4A6] rounded-b-[50%]"></div>

      {/* Logo Circle - Centered */}
      <div className="relative mt-20 bg-white w-85 h-85 rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-[#2EC4A6]">
        <img
          src={frontImage}
          alt="Creative Readers"
          className="w-70 mb-2"
        />
      </div>

      {/* Forgot Password Form */}
      <div className="flex-1 flex items-start justify-center w-full mt-8 z-10">
        <div className="w-[500px] px-3">
          {/* Email */}
          <div className="mb-8">
            <label className="block text-lg font-bold mb-1">Email</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-4 outline-none text-xl text-gray-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
              />
              <Mail className="text-blue-600" size={20} />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            Send Reset Link
          </button>

          {/* Back to Login */}
          <p className="text-center text-xl text-gray-400 text-sm mt-6 cursor-pointer hover:text-blue-600" onClick={() => navigate('/login')}>
            Back to Login
          </p>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;
