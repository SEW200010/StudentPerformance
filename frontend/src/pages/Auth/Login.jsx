import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import frontImage from "../../assets/front.png";
import Footer from "../../components/Footer";
import { User, EyeOff, Eye, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) setEmail(emailParam);
  }, [searchParams]);

  const handleLogin = async () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        // Save user info
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect based on role
        const role = data.user.role;
        if (role === "admin") navigate("/admin");
        else if (role === "teacher") navigate("/teacher");
        else if (role === "parent") navigate("/parent");
        else navigate("/student");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Failed to connect to server. Make sure Flask backend is running.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative overflow-hidden">
      
      {/* Top Green Curve */}
      <div className="absolute top-0 left-0 w-full h-[280px] bg-[#2EC4A6] rounded-b-[50%]"></div>

      {/* Logo */}
      <div className="relative mt-20 bg-white w-85 h-85 rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-[#2EC4A6]">
        <img src={frontImage} alt="Logo" className="w-70 mb-2" />
      </div>

      {/* Login Form */}
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

          {/* Password */}
          <div className="mb-10">
            <label className="block text-lg font-bold mb-1">Password</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full py-4 text-xl outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye className="text-blue-600" size={20} /> : <EyeOff className="text-blue-600" size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-xl font-medium hover:bg-blue-700 transition"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Register Button */}
          <button
            className="w-full bg-green-600 text-white py-3 rounded-lg text-xl font-medium hover:bg-green-700 transition mt-4"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          {/* Forgot Password */}
          <p
            className="text-center text-xl text-gray-400 text-sm mt-6 cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
