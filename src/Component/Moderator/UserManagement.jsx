import React, { useState } from 'react';
import ModeratorNav from './ModeratorNav';

const UserManagement = () => {
  const [records] = useState([
    { id: 1, username: 'johndoe', patientName: 'John Doe', vaccinationName: 'Polio', dose: '1st Dose', status: 'Completed' },
    { id: 2, username: 'janesmith', patientName: 'Jane Smith', vaccinationName: 'MMR', dose: '2nd Dose', status: 'Upcoming' },
    { id: 3, username: 'michael123', patientName: 'Michael Brown', vaccinationName: 'Hepatitis B', dose: '3rd Dose', status: 'Completed' },
  ]);

  const [searchVaccinationName, setSearchVaccinationName] = useState('');
  const [searchVaccinationType, setSearchVaccinationType] = useState('');

  const handleSearch = () => {
    // Logic for searching (to be implemented)
    alert(`Search for Vaccination Name: ${searchVaccinationName}, Type: ${searchVaccinationType}`);
  };

  const handleEdit = (id) => {
    alert(`Edit record with id: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete record with id: ${id}`);
  };

  return (
    <div className="flex min-h-screen">
      <div>
        <ModeratorNav />
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">User Vaccination Management</h2>

        {/* Search Inputs and Button */}
        <div className="flex justify-end mb-4 space-x-2">
          <input
            type="text"
            placeholder="Vaccination Name"
            className="border border-gray-400 p-2 rounded"
            value={searchVaccinationName}
            onChange={(e) => setSearchVaccinationName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Vaccination Type"
            className="border border-gray-400 p-2 rounded"
            value={searchVaccinationType}
            onChange={(e) => setSearchVaccinationType(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Static Records List */}
        <table className="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">Username</th>
              <th className="p-3">Patient's Name</th>
              <th className="p-3">Vaccination Name</th>
              <th className="p-3">Dose</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="p-3">{record.username}</td>
                <td className="p-3">{record.patientName}</td>
                <td className="p-3">{record.vaccinationName}</td>
                <td className="p-3">{record.dose}</td>
                <td className="p-3">{record.status}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(record.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(record.id)}
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
