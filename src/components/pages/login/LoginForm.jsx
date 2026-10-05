import { useState, useRef } from "react";
import { Eye, EyeOff, User, Lock, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../././common/ui/Button";
import { useAuth } from "../../../context/AuthContext";

const emptyCredentials = {
  enrollmentNumber: "",
  password: "",
  remember: false,
};

function LoginForm({ role, setRole }) {
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleRoleSwitch = (newRole) => {
    setRole(newRole);
    setCredentials(emptyCredentials);
    setErrors({});
    setShowPassword(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validate = () => {
    const newErrors = {};

    if (!credentials.enrollmentNumber.trim()) {
      newErrors.enrollmentNumber = "Enrollment number is required";
    }

    if (!credentials.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const loginData = {
        enrollmentNumber: credentials.enrollmentNumber,
        password: credentials.password,
      };

      const profile = await login(loginData);

      if (profile.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (profile.role === "STUDENT") {
        navigate("/student/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);

      if (error.response?.status === 401 || error.response?.status === 403) {
        setErrors({
          general:
            error.response?.data?.message ||
            "Invalid enrollment number or password.",
        });
      } else {
        setErrors({
          general: "Unable to connect to the server. Please try again later.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 h-full">
      <div key={role} className="animate-fade">
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>

        <p className="mt-2 text-sm text-gray-500">
          Sign in as{" "}
          <span className="font-semibold text-blue-700 capitalize">{role}</span>{" "}
          using your enrollment number and password.
        </p>
      </div>

      {/* Role Switcher */}
      <div className="mt-6 flex rounded-lg bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => handleRoleSwitch("student")}
          className={`flex-1 rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            role === "student"
              ? "bg-white shadow text-blue-700"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Student
        </button>

        <button
          type="button"
          onClick={() => handleRoleSwitch("admin")}
          className={`flex-1 rounded-md py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            role === "admin"
              ? "bg-white shadow text-blue-700"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Administrator
        </button>
      </div>

      {errors.general && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Enrollment Number
          </label>

          <div className="relative mt-1">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              name="enrollmentNumber"
              value={credentials.enrollmentNumber}
              onChange={handleChange}
              placeholder="e.g. UWU/ICT/24/001"
              autoComplete="username"
              autoFocus
              disabled={loading}
              className={`w-full rounded-lg border px-11 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:text-gray-400 ${
                errors.enrollmentNumber
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
          </div>

          {errors.enrollmentNumber && (
            <p className="mt-1 text-xs text-red-500">
              {errors.enrollmentNumber}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>

          <div className="relative mt-1">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
              className={`w-full rounded-lg border px-11 py-2.5 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:text-gray-400 ${
                errors.password
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              name="remember"
              checked={credentials.remember}
              onChange={handleChange}
              disabled={loading}
              className="rounded border-gray-300"
            />
            Remember Me
          </label>

          <Link to="/forgot-password" className="text-blue-700 font-medium">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing In...
            </span>
          ) : (
            `Sign in as ${role === "student" ? "Student" : "Administrator"}`
          )}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
