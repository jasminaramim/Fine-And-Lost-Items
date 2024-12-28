import React, { useEffect, useState } from 'react';
import { useAuth } from '../Providers/Authprovider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTh, FaTable } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';

const RecoveryItems = () => {
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ensure the user is logged in and has a valid email
  const userEmail = user ? user.email : '';

  useEffect(() => {
    if (!userEmail) {
      navigate('/login');
    } else {
      fetchRecoveredItems(userEmail);
    }
  }, [userEmail, navigate]);

  const fetchRecoveredItems = async (email) => {
    setLoading(true);
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/recoveries?email=${email}`);
        if (response.ok) {
            const data = await response.json();
            setRecoveredItems(data);
            if (data.length === 0) {
                setError('No recovered items found for this user.');
            }
        } else {
            const errorData = await response.json();
            setError(errorData.message || 'Failed to fetch recovered items.');
        }
    } catch (error) {
        setError('Failed to fetch recovered items.');
        Swal.fire('Error', 'Failed to fetch recovered items', 'error');
    } finally {
        setLoading(false);
    }
};


  const toggleLayout = () => {
    setIsGridLayout(!isGridLayout);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500">Loading your recovered items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (recoveredItems.length === 0) {
    return (
      <div className="text-center">
        <Player
          autoplay
          loop
          src="../assets/notfound.json"
          className="w-1/2 mx-auto"
        />
        <p className="text-gray-500 mt-4">No items have been recovered yet. You can start adding items to the recovery list!</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-semibold mb-4">Your Recovered Items</h2>
      <button
        onClick={toggleLayout}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2"
      >
        {isGridLayout ? (
          <>
            <FaTable /> <span>Switch to Table Layout</span>
          </>
        ) : (
          <>
            <FaTh /> <span>Switch to Grid Layout</span>
          </>
        )}
      </button>

      {isGridLayout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recoveredItems.map((item) => (
            <div key={item._id} className="bg-white border rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.itemName}</h3>
                <p className="text-gray-600 text-sm">Location: {item.recoveredLocation}</p>
                <p className="text-gray-600 text-sm">
                  Recovered Date: {new Date(item.recoveredDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm">Recovered By: {item.recoveredBy.name}</p>
                <p className="text-gray-600 text-sm">Status: {item.status || 'Pending'}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-4 text-left">Item Title</th>
              <th className="border p-4 text-left">Location</th>
              <th className="border p-4 text-left">Recovered Date</th>
              <th className="border p-4 text-left">Recovered By</th>
              <th className="border p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recoveredItems.map((item) => (
              <tr key={item._id}>
                <td className="border p-4">{item.itemName}</td>
                <td className="border p-4">{item.recoveredLocation}</td>
                <td className="border p-4">
                  {new Date(item.recoveredDate).toLocaleDateString()}
                </td>
                <td className="border p-4">{item.recoveredBy.name}</td>
                <td className="border p-4">{item.status || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecoveryItems;
