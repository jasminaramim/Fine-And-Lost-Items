import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Providers/Authprovider';
import useAxiosSecure from '../Hooks/useAxiosSecure'; // Import useAxiosSecure

const AddLostFoundItemsPage = () => {
    const { user: currentUser } = useAuth();
    const [formData, setFormData] = useState({
        image: '',
        itemName: '',
        category: 'lost',
        description: '',
        date: '',
        location: '',
        userEmail: '',
        userName: '',
    });
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure(); // Initialize axiosSecure

    useEffect(() => {
        if (currentUser) {
            setFormData((prevData) => ({
                ...prevData,
                userEmail: currentUser.email,
                userName: currentUser.displayName || 'Anonymous User',
            }));
        }
    }, [currentUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosSecure.post('/items', formData);

            if (response.status === 201) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Item added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-green-500 text-white',
                    },
                });

                setFormData({
                    image: '',
                    itemName: '',
                    category: 'lost',
                    description: '',
                    date: '',
                    location: '',
                    userEmail: currentUser.email,
                    userName: currentUser.displayName || 'Anonymous User',
                });

                navigate('/');
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error adding item.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                    customClass: {
                        confirmButton: 'bg-red-500 text-white',
                    },
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Error sending data.',
                icon: 'error',
                confirmButtonText: 'Try Again',
                customClass: {
                    confirmButton: 'bg-red-500 text-white',
                },
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-5 text-red-500">Add Lost/Found Item</h2>
            <form onSubmit={handleSubmit}>
                {/* Image URL */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-lg font-medium mb-2 text-red-500">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        required
                    />
                </div>

                {/* Item Name */}
                <div className="mb-4">
                    <label htmlFor="itemName" className="block text-lg font-medium mb-2 text-red-500">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        required
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium mb-2 text-red-500">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        required
                    >
                        <option className='text-red-500' value="lost">Lost</option>
                        <option className='text-red-500' value="found">Found</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium mb-2 text-red-500">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        rows="4"
                        required
                    />
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-lg font-medium mb-2 text-red-500">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        required
                    />
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-lg font-medium mb-2 text-red-500">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded text-red-500" // Added text-red-500 to make input text red
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white p-3 rounded-lg"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddLostFoundItemsPage;
