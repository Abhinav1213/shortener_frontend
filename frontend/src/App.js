import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Teams from "./pages/Teams"
import Premium from "./pages/Premium"
import Navbar from "./components/Navbar"
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import { useStateContext } from './context/ContextProvider';



function App() {
  const { activeSidebar, setActiveSidebar } = useStateContext();

  const handleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  }

  return(
    <>
    <Navbar style={{height: 100}}/>
    <div className="fixed bg-gray-900 text-white bottom-4 left-2 border border-black border-solid border-0 rounded-full p-2 md:hidden" onClick={handleSidebar}>
      <GiHamburgerMenu className="text-3xl white"/>
    </div>
    {activeSidebar && (
    <div className="w-full md:w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white mu-3">
      <Sidebar />
    </div>
    )}

    <Routes>
      {/* pages  */}
      <Route path="/" element={(<Home />)} />
      <Route path="/login" element={(<Login />)} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
