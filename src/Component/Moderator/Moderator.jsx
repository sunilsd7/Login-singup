import React, { useState } from 'react';
import ModeratorNav from './ModeratorNav';

const ModeratorDashboard = () => {
  // State variables for the form inputs
  const [vaccineName, setVaccineName] = useState('');
  const [vaccineType, setVaccineType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dose, setDose] = useState('');
  const [location, setLocation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [vaccinations, setVaccinations] = useState([
    { id: 1, name: 'Polio', type: 'Oral', startDate: '2024-09-01', endDate: '2024-09-15', dose: '1st Dose', location: 'City Center', ageGroup: '0-5 years' },
    { id: 2, name: 'MMR', type: 'Injection', startDate: '2024-10-01', endDate: '2024-10-15', dose: '2nd Dose', location: 'Health Clinic', ageGroup: '1-2 years' },
  ]);

  // Function to handle form submission
  const handleAddVaccination = (e) => {
    e.preventDefault();
    const newVaccination = {
      id: vaccinations.length + 1,
      name: vaccineName,
      type: vaccineType,
      startDate,
      endDate,
      dose,
      location,
      ageGroup,
    };
    setVaccinations([...vaccinations, newVaccination]);
    // Reset form inputs
    setVaccineName('');
    setVaccineType('');
    setStartDate('');
    setEndDate('');
    setDose('');
    setLocation('');
    setAgeGroup('');
  };

  // Function to handle editing a vaccination
  const handleEdit = (id) => {
    const vaccination = vaccinations.find(v => v.id === id);
    setVaccineName(vaccination.name);
    setVaccineType(vaccination.type);
    setStartDate(vaccination.startDate);
    setEndDate(vaccination.endDate);
    setDose(vaccination.dose);
    setLocation(vaccination.location);
    setAgeGroup(vaccination.ageGroup);
    setVaccinations(vaccinations.filter(v => v.id !== id));
  };

  // Function to handle deleting a vaccination
  const handleDelete = (id) => {
    setVaccinations(vaccinations.filter(v => v.id !== id));
  };

  return (
    <div className="min-h-screen flex">
      <div>
        <ModeratorNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Vaccination Program Management</h2>

        {/* Form for adding vaccinations */}
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
              placeholder="Vaccine Type"
              value={vaccineType}
              onChange={(e) => setVaccineType(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Dose"
              value={dose}
              onChange={(e) => setDose(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
          </div>
          <button
            type="submit"
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Add Vaccination
          </button>
        </form>

        {/* Vaccination Programs Table */}
        <h3 className="text-xl font-bold mb-4">Vaccination Programs</h3>
        <table className="table-auto w-full bg-white shadow-lg rounded">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">Vaccine Name</th>
              <th className="p-3">Vaccine Type</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Dose</th>
              <th className="p-3">Location</th>
              <th className="p-3">Age Group</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vaccination) => (
              <tr key={vaccination.id}>
                <td className="p-3">{vaccination.name}</td>
                <td className="p-3">{vaccination.type}</td>
                <td className="p-3">{vaccination.startDate}</td>
                <td className="p-3">{vaccination.endDate}</td>
                <td className="p-3">{vaccination.dose}</td>
                <td className="p-3">{vaccination.location}</td>
                <td className="p-3">{vaccination.ageGroup}</td>
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
    </div>
  );
};

export default ModeratorDashboard;
