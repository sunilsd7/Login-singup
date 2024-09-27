import React from 'react';
import UserNav from './UserNav';

const AppointmentForm = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with UserNav */}
      <div className="w-1/4">
        <UserNav />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-gray-100 flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-between">
            {/* Left Side - Children Details Form */}
            <div className="w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">Children Details</h2>

              {/* Child Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="childName">
                  Child Name
                </label>
                <input
                  type="text"
                  id="childName"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter child's name"
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              {/* Booking Date */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="bookingDate">
                  Booking Date
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your address"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Right Side - Vaccination Details */}
            <div className="w-1/2 p-4 bg-gray-50 border-l">
              <h2 className="text-2xl font-bold mb-4">Vaccination Details</h2>

              {/* Vaccination Name */}
              <p className="text-lg mb-2">
                <strong>Vaccination Name:</strong> Covid-19 Vaccine
              </p>

              {/* Vaccination Type */}
              <p className="text-lg mb-2">
                <strong>Vaccination Type:</strong> mRNA
              </p>

              {/* Start Date */}
              <p className="text-lg mb-2">
                <strong>Start Date:</strong> 2024-09-25
              </p>

              {/* End Date */}
              <p className="text-lg mb-2">
                <strong>End Date:</strong> 2024-10-05
              </p>

              {/* Dose */}
              <p className="text-lg mb-2">
                <strong>Dose:</strong> 2nd Dose
              </p>

              {/* Location */}
              <p className="text-lg mb-2">
                <strong>Location:</strong> Local Health Center
              </p>

              {/* Age Group */}
              <p className="text-lg mb-2">
                <strong>Age Group:</strong> 18-45 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
