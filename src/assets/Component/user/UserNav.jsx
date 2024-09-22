import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div className="flex flex-col min-h-screen w-64 bg-gray-800 shadow-lg p-6">
      {/* Top Section */}
      <div className="mb-8 text-white">
        <div className="text-2xl font-bold mb-8">User Dashboard</div>
        <ul className="space-y-4 ">
          <li>
            <Link
              to="/profile"
              className="block py-2 px-4 rounded  hover:bg-gray-200"
            >
              Dashboard
              </Link>
            <Link
              to="/settings"
              className="block py-2 px-4 rounded  hover:bg-gray-200"
            >
             Vaccination Record
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="block py-2 px-4 rounded  hover:bg-gray-200"
            >
              Notifications
            </Link>
          </li>
        </ul>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Logout Section */}
      <div>
        <Link
          to="/"
          className="block py-2 px-4 rounded text-red-500 hover:bg-red-100"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default UserNavbar;
