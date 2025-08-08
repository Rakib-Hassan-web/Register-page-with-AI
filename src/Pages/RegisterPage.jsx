import React, { useState } from "react";
import { Link } from "react-router";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password) errs.confirmPassword = "Passwords do not match";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // remove field-specific error while typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // Simulate success
      setSubmitted(true);
      // Clear form (optional)
      setForm({ username: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Register</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Create your account — it's quick and easy</p>

        {submitted && (
          <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-800">
            Registration successful! (This is a demo — connect to your backend.)
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2 ${errors.username ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="Your username"
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username && <p className="text-xs text-red-500 mb-2">{errors.username}</p>}

          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="you@example.com"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-xs text-red-500 mb-2">{errors.email}</p>}

          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative mb-2">
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.password ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="Enter password"
              type={showPassword ? 'text' : 'password'}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-2 text-sm text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-500 mb-2">{errors.password}</p>}

          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 mb-2 ${errors.confirmPassword ? 'border-red-400' : 'border-gray-200'}`}
            placeholder="Repeat password"
            type={showPassword ? 'text' : 'password'}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && <p className="text-xs text-red-500 mb-2">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className="w-full mt-3 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link href="#" className="text-indigo-600 underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
