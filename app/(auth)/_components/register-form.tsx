"use client";

import { useState } from "react";
import Link from "next/link";

export default function HospitalRegisterForm() {
  const [location, setLocation] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          alert("Unable to fetch location: " + error.message);
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-white shadow-xl rounded-2xl p-10 border border-blue-100">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🏥 Patient Registration
      </h2>

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
            onClick={handleGetLocation}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Use My Location
          </button>
        </div>
        {location && (
          <p className="mt-2 text-sm text-green-600">
            📍 Saved Location: {location}
          </p>
        )}
      </div>

      {/* Register Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 rounded-lg shadow-md hover:scale-105 transition">
        Register
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already registered?{" "}
        <Link href="/login" className="text-blue-500 font-medium hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
