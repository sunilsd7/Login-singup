import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/2023-04/syringe%20and%20bottle%20mrna%20vaccine.jpg?itok=8ubjgoVe)' }}
    >
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" items-center justify-between">
            <Button style="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" text={"Login"} />
            
          </div>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-700"
            >
              Forgot your password?
            </a>
          </div>
          <div className='text-center'>
          <div className="  inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-70">
            Don't have an account ? <Link to='/signup'>Signup</Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
