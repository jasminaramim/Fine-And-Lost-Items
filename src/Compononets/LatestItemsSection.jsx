import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const LatestItemsSection = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('dsc');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchLatestItems();
    AOS.init({
      duration: 1000, // Adjust the duration
      once: false, // Animation runs every time it scrolls into view
    });
  }, [filter, search, sort]);

  const fetchLatestItems = async () => {
    setLoading(true);
    try {
      const response = await axiosSecure.get('/items');
      let filteredItems = response.data;

      if (filter) {
        filteredItems = filteredItems.filter(item =>
          item.category.toLowerCase() === filter.toLowerCase()
        );
      }

      if (search) {
        filteredItems = filteredItems.filter(item =>
          item.itemName.toLowerCase().includes(search.toLowerCase())
        );
      }

      filteredItems.sort((a, b) => {
        if (sort === 'dsc') {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(a.date) - new Date(b.date);
        }
      });

      setItems(filteredItems.slice(0, 6)); // Limit to 6 items
    } catch (error) {
      setError('Failed to load items. Please try again later.');
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Lost & Found Items</h2>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-8">
        <div>
          <select
            className="border p-4 text-red-400 rounded-lg"
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
            className="px-6 py-2 text-red-700 placeholder-red-500 bg-white outline-none"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search by Item Name"
          />
          <button className="px-4 py-3 text-sm font-medium bg-red-700 text-red rounded-md">
            Search
          </button>
        </div>

        <div>
          <select
            className="border text-red-500 p-4 rounded-md"
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
          <div className="w-16 h-16 border-4 border-t-transparent border-red-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Latest Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className=" bg-gradient-to-r from-red-300 to-orange-400 border-2 border-red-400 shadow-lg rounded-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-200 group"
              data-aos="fade-right"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.itemName}
                  className="h-48 w-full rounded-lg object-cover transition-transform transform group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl text-red-500 font-bold mb-2">{item.itemName}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-bold text-yellow-950">Category: </span>
                  {item.category}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-bold text-yellow-950">Location: </span>{' '}
                  {item.location}
                </p>
                <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                <Link
                  to={`/items/${item._id}`}
                  className="mt-auto text-red-500 underline hover:text-red-700"
                >
                  View Details
                </Link>
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
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600"
        >
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default LatestItemsSection;
