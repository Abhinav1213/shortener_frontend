import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useStateContext();
  return (
    <nav className="bg-gray-800 p-2 hidden md:flex">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">
          <Link to="/">Logo</Link>
        </div>
        <div className="hidden md:block pr-0">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/premium" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Premium</Link>
          <Link to="/teams" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Teams</Link>
          <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
          {isLoggedIn && 
          (<Link to="/dashboard" className="text-white text-3xl hover:bg-gray-700 px-3 py-2 rounded-md container mr-0 ml-10">
            <CgProfile className="inline-block ml-2 mr-2" />
          </Link>)}
          {isLoggedIn ?
           (<button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-0" onClick={() => {setIsLoggedIn(false)}}>Log Out</button>):
           (<button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-0 p-0"><Link className="w-full p-0" to="/login">Log in</Link></button>)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar