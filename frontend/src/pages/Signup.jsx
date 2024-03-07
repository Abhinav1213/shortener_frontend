import React, { useState } from 'react';
import { FaGoogle, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom'

import { useStateContext } from '../context/ContextProvider';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn, activeSidebar, setActiveSidebar } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${activeSidebar?'hidden':''} md:flex`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input id="username" name="username" type="text" autoComplete="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2" placeholder="Password" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
          </div>
        </form>
        <div className="text-xs container mx-auto text-center mu-0">
          Already have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:text-red-500 click:text-purple-500"> Sign in</Link>
        </div>
        <div className="container mx-auto text-center">
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaGoogle /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaLinkedin /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaDiscord /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaGithub /></button>
          </div>
      </div>
    </div>
  );
};

export default Signup;
