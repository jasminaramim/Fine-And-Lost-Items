import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllItemsPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);  // Loading state
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    fetchItems();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, items]);

  const fetchItems = async () => {
    try {
      setLoading(true); // Start loading
      const { data } = await axiosSecure.get('/items');
      setItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false); // Stop loading after data fetch
    }
  };

  return (
    <div className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">
        All Lost & Found Items
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        <select
          className="px-4 text-red-500 py-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {[...new Set(items.map(item => item.category))].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <ClipLoader color="#facc15" size={50} />
        </div>
      ) : (
        // Items Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item._id}
                data-aos="fade-right"
                className="bg-gradient-to-r transition-transform transform group-hover:scale-110 flex-grow from-yellow-300 p-2 via-yellow-200 to-yellow-200 border-2 border-yellow-500 shadow-lg rounded-lg overflow-hidden flex flex-col h-full hover:scale-105 hover:shadow-2xl hover:bg-yellow-100 group"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full rounded-lg object-cover transition-transform transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col ">
                  <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
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
                    See More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllItemsPage;
