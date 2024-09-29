import React, { useState } from 'react';
import ModeratorNav from './ModeratorNav';

const RecordManagement = () => {
  const [records] = useState([
    { id: 1, vaccinationName: 'Polio', vaccinationType: 'Oral', patientName: 'John Doe', status: 'Served' },
    { id: 2, vaccinationName: 'MMR', vaccinationType: 'Injection', patientName: 'Jane Smith', status: 'Peek' },
    { id: 3, vaccinationName: 'Hepatitis B', vaccinationType: 'Injection', patientName: 'Michael Brown', status: 'Delayed' },
  ]);

  const handleAction = (id) => {
    alert(`Action on record with id: ${id}`);
  };

  return (
    <>
    <div className='flex'>
        <div> <ModeratorNav/></div>
        <div className='w-full'>
    <div className="flex flex-col min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Record Management</h2>

      {/* Buttons */}
      <div className="mb-4 flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Peek</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Served</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delayed</button>
      </div>

      {/* Table */}
      <table className="table-auto w-full bg-white shadow-lg rounded">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3">S.N</th>
            <th className="p-3">Vaccination Name</th>
            <th className="p-3">Vaccination Type</th>
            <th className="p-3">Patient's Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.id}>
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{record.vaccinationName}</td>
              <td className="p-3">{record.vaccinationType}</td>
              <td className="p-3">{record.patientName}</td>
              <td className="p-3">{record.status}</td>
              <td className="p-3">
                <button
                  onClick={() => handleAction(record.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default RecordManagement;
