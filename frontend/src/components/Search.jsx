// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      onSearch?.([]);
      return;
    }

    setLoading(true);

    try {
      const apiKey = 'd974010fe32ff813b864f49754b55289f5476b3b';

      const response = await axios.post(
        'https://google.serper.dev/search',
        { q: trimmedQuery },
        {
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      const results = Array.isArray(response.data.organic)
        ? response.data.organic.map((item) => ({
            title: item.title,
            snippet: item.snippet,
            link: item.link,
          }))
        : [];

      onSearch?.(results);
    } catch (error) {
      console.error('Search failed:', error.message);
      onSearch?.([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      onSearch?.([]);
    }
  };

  return (
    <div className="w-full relative px-4 sm:px-8">
      <form onSubmit={handleSearch} className="relative w-full max-w-3xl mx-auto">
        <div className="relative p-[4px] rounded-full animate-rgbBorderAnimation bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:300%_300%] shadow-[0_0_60px_rgba(112,145,230,0.7)]">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full px-6 py-4 sm:px-8 sm:py-5 rounded-full text-base sm:text-lg font-medium placeholder:text-gray-500 bg-white text-brand-black focus:outline-none"
            value={query}
            onChange={handleInputChange}
          />
        </div>

        {/* Responsive button, moves below input on very small screens */}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 shadow-[0_0_15px_rgba(0,191,255,0.8)] hover:shadow-[0_0_25px_rgba(0,191,255,1)] transition-all duration-300
          text-sm sm:text-base"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">Searching...</p>
      )}
    </div>
  );
};

export default Search;
