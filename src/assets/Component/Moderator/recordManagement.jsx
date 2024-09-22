import React, { useState } from 'react';
import ModeratorNav from './ModeratorNav';

const RecordManagement = () => {
  const [vaccineName, setVaccineName] = useState('');
  const [totalVaccinated, setTotalVaccinated] = useState('');
  const [records, setRecords] = useState([
    { id: 1, vaccineName: 'Polio', totalVaccinated: 150 },
    { id: 2, vaccineName: 'MMR', totalVaccinated: 100 },
  ]);

  const handleAddRecord = (e) => {
    e.preventDefault();
    const newRecord = {
      id: records.length + 1,
      vaccineName,
      totalVaccinated,
    };
    setRecords([...records, newRecord]);
    setVaccineName('');
    setTotalVaccinated('');
  };

  const handleEdit = (id) => {
    const record = records.find(r => r.id === id);
    setVaccineName(record.vaccineName);
    setTotalVaccinated(record.totalVaccinated);
    setRecords(records.filter(r => r.id !== id));
  };

  const handleDelete = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ModeratorNav />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Vaccination Record Management</h2>

        {/* Form to add record */}
        <form onSubmit={handleAddRecord} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vaccine Name"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="number"
              placeholder="Total Vaccinated"
              value={totalVaccinated}
              onChange={(e) => setTotalVaccinated(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Add Record
          </button>
        </form>

        {/* Record list in table form */}
        <h3 className="text-xl font-bold mb-4">Vaccination Records</h3>
        <table className="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">Vaccine Name</th>
              <th className="p-3">Total Vaccinated</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="p-3">{record.vaccineName}</td>
                <td className="p-3">{record.totalVaccinated}</td>
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

export default RecordManagement;
