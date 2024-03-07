import React from 'react';

const PrevLinksTable = ({ previousLinks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original URL</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shortened URL</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {previousLinks.map((link, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{link.originalUrl}</td>
              <td className="px-6 py-4 whitespace-nowrap">{link.shortenedUrl}</td>
              <td className="px-6 py-4 whitespace-nowrap">{link.clicks}</td>
              {/* Add more cells for additional columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default PrevLinksTable;