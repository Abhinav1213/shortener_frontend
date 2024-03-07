import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { isLoggedIn, activeSidebar, setLoggedIn, setActiveSidebar } = useStateContext();
  return (
    <div className="flex flex-col md:w-72 bg-gray-800 h-screen">
        <div className="flex items-center px-6 py-3 text-gray-300 text-m my-2 md:my-1 md:hidden" 
        onClick={() => setActiveSidebar(false)}>
          <IoMdCloseCircleOutline />
        </div>
      <div className="flex flex-col flex-grow">
        {isLoggedIn ? 
          (<Link to="/dashboard" className="text-white text-4xl hover:bg-gray-700 px-3 py-2 rounded-md container mr-0 ml-2"
          onClick={() => setActiveSidebar(false)}>
            <CgProfile className="inline-block ml-2 mr-2" />
          </Link>):
          (<>
          <Link to="/login" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 md-4 md:my-1"
          onClick={() => setActiveSidebar(false)}>
            Login
          </Link>
          <hr className="md:hidden" />
          </>
          )}
        <Link to="/" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 my-4 md:my-1"
        onClick={() => setActiveSidebar(false)}>
          Home
        </Link>
        <hr className="md:hidden"></hr>
        <Link to="/premium" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 my-4 md:my-1"
        onClick={() => setActiveSidebar(false)}>
          Premium
        </Link>
        <hr className="md:hidden"></hr>
        <Link to="/teams" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 my-4 md:my-1"
        onClick={() => setActiveSidebar(false)}>
          Teams
        </Link>
        <hr className="md:hidden"></hr>
        <Link to="/contact" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 my-4 md:my-1"
        onClick={() => setActiveSidebar(false)}>
          Contact
        </Link>
        <hr className="md:hidden"></hr>
      </div>
    </div>
  );
};

export default Sidebar;
