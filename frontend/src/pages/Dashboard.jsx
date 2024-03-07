import React, { useState, useEffect } from 'react';
import PrevLinksTable from "../components/PrevLinksTable"
import data from "../data/urlData.json"

import { useStateContext } from '../context/ContextProvider'; 

const Dashboard = () => {
  const [numShortenedUrls, setNumShortenedUrls] = useState(0);
  const [numClicks, setNumClicks] = useState(0);
  const [viewData, setViewData] = useState(false);
  const { activeSidebar } = useStateContext();

  useEffect(() => {
      setNumShortenedUrls(100);
      setNumClicks(500);
  }, []);

  return (
    <div className={`${activeSidebar? 'hidden':''}`}>   
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        <div className="bg-white rounded-lg shadow-md p-6 my-4">
          <h2 className="text-lg font-semibold mb-2">Total Shortened URLs</h2>
          <p className="text-2xl font-bold">{numShortenedUrls}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 my-4">
          <h2 className="text-lg font-semibold mb-2">Total Clicks</h2>
          <p className="text-2xl font-bold">{numClicks}</p>
        </div>
        <div className="bg-white rounded-full border border-solid border-black border-10 p-4 hidden md:block my-4 mx-auto">
          <img src="images/profile_img.jpg" style={{height: 200}}></img>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 border border-solid border-dark border-10 mb-6 text-center">
      <button className="w-full p-4" onClick={() => setViewData(!viewData)}>View Previous Links</button>
    </div>
    {viewData && (
    <PrevLinksTable className="mu-4"previousLinks={data}/>
    )}
    </div>
  );
};

export default Dashboard;
