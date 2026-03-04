import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import frontImage from '../../assets/front.png';
import Footer from '../../components/Footer';
import { User, EyeOff, Eye, Mail } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam) {
      setFormData(prev => ({ ...prev, role: roleParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleRegister = async () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.role) newErrors.role = "Please select a role";
    if (formData.password.length < 6) newErrors.password = "At least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 🚀 SEND DATA TO FLASK BACKEND
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.status === 201) {
        navigate('/login');
      }

    } catch (error) {
      alert("❌ Failed to connect to server. Check if Flask is running.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[280px] bg-[#2EC4A6] rounded-b-[50%]"></div>

      <div className="relative mt-20 bg-white w-85 h-85 rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-[#2EC4A6]">
        <img src={frontImage} alt="front" className="w-70 mb-2" />
      </div>

      <div className="flex-1 flex justify-center w-full z-10">
        <div className="w-[500px] px-3">

          {/* --- NAME FIELD --- */}
          <div className="mb-1">
            <label className="block text-lg font-bold mb-1">Full Name</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full py-4 outline-none text-xl text-gray-500"
                value={formData.name}
                onChange={handleChange}
              />
              <User className="text-blue-600" size={20} />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* --- EMAIL FIELD --- */}
          <div className="mb-1">
            <label className="block text-lg font-bold mb-1">Email</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-4 outline-none text-xl text-gray-500"
                value={formData.email}
                onChange={handleChange}
              />
              <Mail className="text-blue-600" size={20} />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* --- ROLE SELECT --- */}
          <div className="mb-1">
            <label className="block text-lg font-bold mb-1">Role</label>
            <select
              name="role"
              className="w-full py-4 border-b border-gray-400 outline-none text-xl text-gray-500"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>

          {/* --- PASSWORD --- */}
          <div className="mb-1">
            <label className="block text-lg font-bold mb-1">Password</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full py-4 text-xl outline-none"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* --- CONFIRM PASSWORD --- */}
          <div className="mb-10">
            <label className="block text-lg font-bold mb-1">Confirm Password</label>
            <div className="flex items-center border-b border-gray-400">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full py-4 text-xl outline-none"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* --- REGISTER BUTTON --- */}
          <button 
            className="w-full bg-green-600 text-white py-3 rounded-lg text-xl font-medium hover:bg-green-700 transition" 
            onClick={handleRegister}
          >
            Register
          </button>

          {/* --- LINK TO LOGIN --- */}
          <p className="text-center text-xl text-gray-400 mt-2 cursor-pointer hover:text-blue-600"
             onClick={() => navigate('/login')}>
            Already have an account? Login
          </p>

        </div>
      </div>

      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
