// src/components/SearchResults.jsx
import React from 'react';

const SearchResults = ({ results }) => {
  if (!results?.length) return null;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
      {results.map((result, idx) => (
        <a
          key={idx}
          href={result.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 rounded-xl bg-white/50 backdrop-blur border border-white/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {result.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {result.snippet}
          </p>
        </a>
      ))}
    </div>
  );
};

export default SearchResults;
