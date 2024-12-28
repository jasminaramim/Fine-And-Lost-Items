import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
       
        const fetchItems = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/items`);
                console.log('Fetched items:', data);
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="my-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">All Lost & Found Items</h2>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{item.itemName}</h3>
                                <p className="text-gray-600 text-sm">Type: {item.category}</p>
                                <p className="text-gray-600 text-sm">Location: {item.location}</p>
                                <p className="text-gray-600 text-sm">Date: {item.date}</p>
                            
                                <div className="mt-4">
                                    <Link
                                        to={`/items/${item._id}`}
                                        className="text-blue-500 underline hover:text-blue-700"
                                    >
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
        </div>
    );
};

export default AllItemsPage;
