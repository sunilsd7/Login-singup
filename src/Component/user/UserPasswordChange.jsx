import React, { useState } from 'react';
import Button from '../Layout/Button'; // Import your existing Button component
import UserNav from './UserNav'

const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    if (newPassword === confirmPassword) {
      console.log('Password changed successfully');
      // Reset form fields if needed
    } else {
      console.error('New passwords do not match');
    }
  };

  return (
    <>
    <div className='flex'>
        <div>
            <UserNav/>
        </div>
    <div className='w-full mt-20'>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="current-password">
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="w-full p-2 border border-gray-300 rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full p-2 border border-gray-300 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="confirm-password">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <Button style='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' text={'Change Password'} />
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default PasswordChangeForm;
