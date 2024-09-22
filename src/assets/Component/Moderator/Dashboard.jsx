import React, { useState } from 'react';

const Dashboard = () => {
  const [vaccineName, setVaccineName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [address, setAddress] = useState('');
  const [vaccineType, setVaccineType] = useState('');
  const [vaccinations, setVaccinations] = useState([
    { id: 1, name: 'Polio', ageGroup: '0-5 years', address: 'City Center', type: 'Oral' },
    { id: 2, name: 'MMR', ageGroup: '1-2 years', address: 'Health Clinic', type: 'Injection' },
  ]);

  const handleAddVaccination = (e) => {
    e.preventDefault();
    const newVaccination = {
      id: vaccinations.length + 1,
      name: vaccineName,
      ageGroup,
      address,
      type: vaccineType,
    };
    setVaccinations([...vaccinations, newVaccination]);
    setVaccineName('');
    setAgeGroup('');
    setAddress('');
    setVaccineType('');
  };

  const handleEdit = (id) => {
    const vaccination = vaccinations.find(v => v.id === id);
    setVaccineName(vaccination.name);
    setAgeGroup(vaccination.ageGroup);
    setAddress(vaccination.address);
    setVaccineType(vaccination.type);
    setVaccinations(vaccinations.filter(v => v.id !== id));
  };

  const handleDelete = (id) => {
    setVaccinations(vaccinations.filter(v => v.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Vaccination Program Management</h2>

      {/* Form to add vaccination details */}
      <form className="mb-8" onSubmit={handleAddVaccination}>
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
            type="text"
            placeholder="Age Group"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Vaccine Type"
            value={vaccineType}
            onChange={(e) => setVaccineType(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Add Vaccination
        </button>
      </form>

      {/* Vaccination list */}
      <h3 className="text-xl font-bold mb-4">Vaccination Programs</h3>
      <table className="table-auto w-full bg-white shadow-lg rounded">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3">Vaccine Name</th>
            <th className="p-3">Age Group</th>
            <th className="p-3">Address</th>
            <th className="p-3">Vaccine Type</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vaccinations.map((vaccination) => (
            <tr key={vaccination.id}>
              <td className="p-3">{vaccination.name}</td>
              <td className="p-3">{vaccination.ageGroup}</td>
              <td className="p-3">{vaccination.address}</td>
              <td className="p-3">{vaccination.type}</td>
              <td className="p-3 flex space-x-2">
                <button
                  onClick={() => handleEdit(vaccination.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(vaccination.id)}
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
  );
};

export default Dashboard;
