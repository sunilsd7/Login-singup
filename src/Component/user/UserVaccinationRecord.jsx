import React from 'react';
import Button from '../Layout/Button'; // Ensure you import your Button component

const VaccinationRecords = () => {
  // Static vaccination records data for testing purposes
  const vaccinationRecords = [
    {
      id: 1,
      vaccinationName: 'Polio',
      vaccinationType: 'Oral',
      startDate: '2024-09-01',
      endDate: '2024-09-15',
      dose: '1st Dose',
      location: 'City Hospital',
      status: 'Completed',
      
     
    },
    {
      id: 2,
      vaccinationName: 'Hepatitis B',
      vaccinationType: 'Injection',
      startDate: '2024-10-01',
      endDate: '2024-10-15',
      dose: '2nd Dose',
      location: 'Health Center',
      status: 'Upcoming',
    
 
    },
    {
      id: 3,
      vaccinationName: 'MMR',
      vaccinationType: 'Injection',
      startDate: '2024-10-20',
      endDate: '2024-10-30',
      dose: '1st Dose',
      location: 'Community Clinic',
      status: 'Upcoming',
      
  
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 mr-10 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-2">Vaccination Name</th>
            <th className="border border-gray-300 px-2 py-2">Vaccination Type</th>
            <th className="border border-gray-300 px-2 py-2">Start Date</th>
            <th className="border border-gray-300 px-2 py-2">End Date</th>
            <th className="border border-gray-300 px-2 py-2">Dose</th>
            <th className="border border-gray-300 px-2 py-2">Location</th>
            <th className="border border-gray-300 px-2 py-2">Status</th>
           
          
            <th className="border border-gray-300 px-4 py-2">Actions</th> {/* New Actions Column */}
          </tr>
        </thead>
        <tbody>
          {vaccinationRecords.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-2 py-2">{record.vaccinationName}</td>
              <td className="border border-gray-300 px-2 py-2">{record.vaccinationType}</td>
              <td className="border border-gray-300 px-4 py-2">{record.startDate}</td>
              <td className="border border-gray-300 px-4 py-2">{record.endDate}</td>
              <td className="border border-gray-300 px-4 py-2">{record.dose}</td>
              <td className="border border-gray-300 px-4 py-2">{record.location}</td>
              <td className="border border-gray-300 px-4 py-2">{record.status}</td>
              
            
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
     
                <Button style='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600' text={'Edit'} />
          
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Dummy handlers for Edit and Delete actions
const handleEdit = (id) => {
  console.log('Edit record with ID:', id);
};

const handleDelete = (id) => {
  console.log('Delete record with ID:', id);
};

export default VaccinationRecords;
