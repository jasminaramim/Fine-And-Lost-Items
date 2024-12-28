import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import noItemsAnimation from '../assets/notfound.json'; // Your Lottie file path

const ManageMyItemsPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setUserEmail(user.email); 
        } else {
            Swal.fire('Error', 'User not authenticated. Please login.', 'error');
        }
    }, []);

    useEffect(() => {
        if (!userEmail) return; 

        const fetchItems = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/items?email=${userEmail}`);
                if (response.ok) {
                    const data = await response.json();
                    setItems(data); 
                } else {
                    throw new Error('Failed to fetch items');
                }
            } catch (error) {
                setError(error.message); 
                Swal.fire('Error', error.message, 'error');
            } finally {
                setIsLoading(false); 
            }
        };
        
        fetchItems();
    }, [userEmail]);

    const modernDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/items/${id}`);
                toast.success('Item Deleted Successfully!');
                setItems(items.filter(item => item._id !== id));
            } catch (err) {
                toast.error('Failed to delete the item!');
            }
        }
    };

    const handleUpdateClick = (id) => {
        navigate(`/updateItem/${id}`);
    };

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: noItemsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5">
            <h2 className="text-2xl font-semibold mb-5">All Items</h2>

            {isLoading ? (
                <p>Loading your items...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-10 text-center bg-gray-100 rounded-lg shadow-md">
                    <Lottie options={lottieOptions} height={200} width={200} />
                    <p className="mt-5 text-lg font-semibold text-gray-700">No items found. Please add items to your collection.</p>
                    <button 
                        onClick={() => navigate('/add-lost-item')} 
                        className="mt-5 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        Add an Item
                    </button>
                </div>
            ) : (
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border-2 border-gray-300 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 border border-gray-300">
                                                <span>Title</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 border border-gray-300">
                                                <span>Type</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 border border-gray-300">
                                                <span>Date</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 border border-gray-300">
                                                <span>Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {items.map((item) => (
                                            <tr key={item._id}>
                                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap border border-gray-300">{item.itemName}</td>
                                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap capitalize border border-gray-300">{item.category}</td>
                                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap border border-gray-300">{new Date(item.date).toLocaleDateString()}</td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap border border-gray-300">
                                                    <div className="flex items-center gap-x-6">
                                                        <button
                                                            onClick={() => handleUpdateClick(item._id)}
                                                            className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => modernDelete(item._id)}
                                                            className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageMyItemsPage;
