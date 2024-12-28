import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestItemsSection = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');  
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('dsc');  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  // Define the loading state

  useEffect(() => {
    fetchLatestItems();
  }, [filter, search, sort]);

  const fetchLatestItems = async () => {
    setLoading(true);  // Set loading to true when fetching data
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`);
      let filteredItems = response.data;
  
      console.log("Items before filtering:", filteredItems);
      console.log("Current filter:", filter);
  
      if (filter) {
        filteredItems = filteredItems.filter(item =>
          item.category.toLowerCase() === filter.toLowerCase() // Case insensitive comparison
        );
        console.log("Filtered items:", filteredItems); 
      }
  
      // Search items by name
      if (search) {
        filteredItems = filteredItems.filter(item =>
          item.itemName.toLowerCase().includes(search.toLowerCase())
        );
      }
  
      // Sort items by date
      filteredItems.sort((a, b) => {
        if (sort === 'dsc') {
          return new Date(b.date) - new Date(a.date); // Descending
        } else {
          return new Date(a.date) - new Date(b.date); // Ascending
        }
      });
  
      setItems(filteredItems);
    } catch (error) {
      setError('Failed to load items. Please try again later.');
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);  // Set loading to false after data is fetched
    }
  };

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Lost & Found Items</h2>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-8">
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">Filter By Type</option>
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>

        <div className="flex p-1 overflow-hidden border rounded-lg">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by Item Name"
          />
          <button className="px-4 py-3 text-sm font-medium bg-gray-700 text-white rounded-md">
            Search
          </button>
        </div>

        <div>
          <select
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="dsc">Sort by Date: Most Recent</option>
            <option value="asc">Sort by Date: Oldest</option>
          </select>
        </div>
      </div>

      {/* Loading or Error */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500">{error}</div>
      )}

      {/* Latest Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.slice(0, 6).map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.itemName}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.itemName}</h3>
                <p className="text-gray-600 text-sm">Category: {item.category}</p>
                <p className="text-gray-600 text-sm">Location: {item.location}</p>
                <p className="text-gray-600 text-sm">Date: {new Date(item.date).toLocaleDateString()}</p>
                <div className="mt-4">
                  <Link to={`/items/${item._id}`} className="text-blue-500 underline hover:text-blue-700">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>

      {/* See All Items Link */}
      <div className="flex justify-center mt-8">
        <Link
          to="/AllItemsPage"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
        >
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default LatestItemsSection;
