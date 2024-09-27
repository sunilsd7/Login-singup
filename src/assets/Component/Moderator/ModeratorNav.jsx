import React from 'react';
import { NavLink } from 'react-router-dom';

const ModeratorNav = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Moderator Dashboard</h2>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/moderatorDashboard"
              className={({ isActive }) =>
                isActive
              ? "block py-2 px-4 rounded bg-gray-900 text-white"
              : "block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"
}

            >
              Dashboard
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/usermanagement"
              className={({ isActive }) =>
                isActive
              ? "block py-2 px-4 rounded bg-gray-900 text-white"
              : "block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"
}

            >
              User Management
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/vaccinationRecord"
              className={({ isActive }) =>
                isActive
              ? "block py-2 px-4 rounded bg-gray-900 text-white"
              : "block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"

              }
            >
              Record Management
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/ModeratorChat"
              className={({ isActive }) =>
                isActive
              ? "block py-2 px-4 rounded bg-gray-900 text-white"
              : "block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"

              }
            >
              Chat
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout Link at the Bottom */}
      <div className="p-6">
        <NavLink
          to="/"
          className="block py-2 px-4 rounded text-red-500 hover:bg-red-100"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default ModeratorNav;
