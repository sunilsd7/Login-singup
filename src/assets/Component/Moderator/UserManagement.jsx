import React, { useState } from 'react';
import ModeratorNav from './ModeratorNav';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', address: '123 Main St', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', phone: '987-654-3210', email: 'jane@example.com' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', address: '', phone: '', email: '' });

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = {
      ...newUser,
      id: users.length + 1
    };
    setUsers([...users, newUserWithId]);
    setNewUser({ name: '', address: '', phone: '', email: '' }); // Reset the form
  };

  const handleEdit = (id) => {
    const user = users.find(u => u.id === id);
    setNewUser(user);
    setUsers(users.filter(user => user.id !== id)); // Removing the user for editing purposes
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      <div>
        <ModeratorNav/>
      </div>
    

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>

        {/* Add User Form */}
        <form onSubmit={handleAddUser} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={newUser.address}
              onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={newUser.phone}
              onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
            Add User
          </button>
        </form>

        {/* User list */}
        <table className="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.address}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
