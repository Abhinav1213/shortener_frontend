import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import { FaGoogle, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa6";
import axios from 'axios';


const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn, activeSidebar, setActiveSidebar } = useStateContext();
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async(e ) => {
    e.preventDefault();
    try {
      // console.log();
     await axios.post("https://shortened.azurewebsites.net/login", {
        email,
        password
      }).then((res) => {
        if (res.data.success) {
          console.log(res.data);
          navigate('/');
        }
        else {
          setError(res.data.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setemail('');
    setPassword('');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${activeSidebar?'hidden':''} md:flex`}>
      <div className="max-w-md w-full space-y-8">
        {!isLoggedIn &&(
        <>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
          {error && <p className="mt-2 text-center text-red-600">{error}</p>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">email</label>
            <input id="email" name="email" type="text" autoComplete="email" required value={email} onChange={(e) => setemail(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
          </div>
        </form>
        <div className="text-xs container mx-auto text-center">
            Don't have an account, yet? <Link to="/signup" className="font-medium text-indigo-600 hover:text-red-500 click:text-purple-500"> Sign up</Link>
        </div>
          <div className="container mx-auto text-center">
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaGoogle /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaLinkedin /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaDiscord /></button>
            <button className="bg-gray-200 mr-2 hover:bg-gray-400 text-xl rounded-full p-4"><FaGithub /></button>
          </div>
          </>)}
        {isLoggedIn && (
          <div className="container">
              <p className="text-center text-sm text-gray-600">You are logged in!</p>
              <button onClick={handleLogout} className="w-1000  mx-auto flex text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-2">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
