import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between bg-slate-300 py-8 px-10">
      {/* MediMitra description */}
      <div className="w-1/3">
        <h2 className="text-xl font-bold mb-2">MediMitra</h2>
        <p>
          MediMitra is a healthcare platform that helps parents manage their child's vaccination schedule. It provides reminders, digital records, and flexible scheduling to ensure timely vaccinations.
        </p>
      </div>

      {/* Quick Links */}
      <div className="w-1/3 px-10">
        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
        <ul>
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="w-1/3 px-10">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <ul>
          <li>Phone: 9800000000</li>
          <li>Email: <a href="mailto:medimitra1995@gmail.com" className="text-red-500 hover:underline">medimitra1995@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
