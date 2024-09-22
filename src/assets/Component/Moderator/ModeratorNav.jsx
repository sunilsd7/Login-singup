import React from 'react';
import { Link } from 'react-router-dom';

const ModeratorNav = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Moderator Dashboard</h2>
        <ul>
          <li className="mb-4"><a href="/moderatorDashboard" className="hover:underline">Dashboard</a></li>
          <li className="mb-4"><a href="/usermanagement" className="hover:underline">User Management</a></li>
          <li className="mb-4"><a href="/vaccinationRecord" className="hover:underline">Record Management</a></li>
          <li className="mb-4"><a href="/chat" className="hover:underline">Chat</a></li>
        </ul>
      </div>
      {/* Logout Link at the Bottom */}
      <div className="p-6">
        <Link to="/" className="text-red-500 hover:underline">Logout</Link>
      </div>
    </div>
  );
};

export default ModeratorNav;
