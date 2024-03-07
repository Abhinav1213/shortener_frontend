import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import axios from 'axios'

const Home = () => {
  const [fullUrl, setfullUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const { activeSidebar, setActiveSidebar } = useStateContext();

  const handleShorten = async() => {
    try {
        await axios.post("https://shortened.azurewebsites.net/shorten", {
        fullUrl
        }).then((res) => {
        console.log(res.data);
      })
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${activeSidebar?'hidden':''} md:flex`}>
      <div className="max-w-md w-full space-y-8">
        <img src="images/urlshortener-solid.svg" className="mx-auto h-12 w-auto"></img>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">URL Shortener</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="fullUrl" className="sr-only">Original URL</label>
            <input id="fullUrl" name="fullUrl" type="url" autoComplete="off" required value={fullUrl} onChange={(e) => setfullUrl(e.target.value)} className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your URL here" />
          </div>
          <div>
            <button type="button" onClick={handleShorten} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Shorten URL</button>
          </div>
        </form>
        {shortenedUrl && (
          <div>
            <p className="text-center text-lg font-semibold">Shortened URL:</p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-600 hover:underline">{shortenedUrl}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
