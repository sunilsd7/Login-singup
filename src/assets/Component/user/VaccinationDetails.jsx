import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '../Layout/Button'; 
import UserNav from './UserNav'

const VaccinationTable = () => {
  const vaccinationData = [
    { id: 1, name: 'Covid-19 Vaccine', date: '2024-09-25', dose: '2nd Dose', location: 'Local Health Center' },
    { id: 2, name: 'Polio Vaccine', date: '2024-10-05', dose: '1st Dose', location: 'City Hospital' },
    { id: 3, name: 'Hepatitis B Vaccine', date: '2024-10-15', dose: '3rd Dose', location: 'Community Clinic' }
  ];

  return (
    <div className=" flex">
        <div>
            <UserNav/>
        </div>
        <div className='p-6 w-full'>
      <h2 className="text-2xl font-bold mb-4">Vaccination Records</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Vaccine Name</th>
            <th className="py-2 px-4 border-b text-left">Date</th>
            <th className="py-2 px-4 border-b text-left">Dose</th>
            <th className="py-2 px-4 border-b text-left">Location</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vaccinationData.map((vaccine) => (
            <tr key={vaccine.id}>
              <td className="py-2 px-4 border-b">{vaccine.name}</td>
              <td className="py-2 px-4 border-b">{vaccine.date}</td>
              <td className="py-2 px-4 border-b">{vaccine.dose}</td>
              <td className="py-2 px-4 border-b">{vaccine.location}</td>
              <td className="py-2 px-4 border-b">
              
                <Link to="/appointment">
                  <Button style='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600' text="Book vaccination" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default VaccinationTable;
