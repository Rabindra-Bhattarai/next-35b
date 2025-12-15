"use client";

import { useState } from "react";
import Link from "next/link";

export default function HospitalRegisterForm() {
  const [location, setLocation] = useState("");

  // Function to open Google Maps
  const handleOpenMaps = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <div className="mx-auto max-w-lg bg-white shadow-xl rounded-2xl p-10 border border-blue-100">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🏥 Patient Registration
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Please fill in your details to access hospital services.
      </p>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="you@hospital.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Location
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter or pick location"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="button"
            onClick={handleOpenMaps}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Pick on Map
          </button>
        </div>
        {location && (
          <p className="mt-2 text-sm text-green-600">
            📍 Saved Location: {location}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Register Button */}
      <button
        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        Register
      </button>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Already registered?{" "}
        <Link
          href="/login"
          className="text-blue-500 font-medium hover:underline transition duration-300"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
