import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [item, setItem] = useState(null);
    const [recoveredLocation, setRecoveredLocation] = useState("");
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState(""); 

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`);
                if (!response.ok) {
                    throw new Error("Item not found");
                }
                const data = await response.json();
                setItem(data);
            } catch (err) {
                console.error("Error fetching item details:", err);
                setError("Failed to load item details. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchItemDetails();
    }, [id]);

    const handleRecoverySubmit = async () => {
        const recoveryData = {
            itemName: item.itemName,
            recoveredLocation,
            recoveredDate,
            recoveredBy: {
                name: user.displayName,
                email: user.email, 
                photoURL: user.photoURL,
            },
            userEmail: user.email, 
            itemId: item._id,
            action: selectedAction,
        };
    
        console.log("Recovery Data Sent:", recoveryData); 
    
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/recoveries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recoveryData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Server Error:", errorData);
            } else {
                console.log("Recovery submitted successfully.");
            }
        } catch (error) {
            console.error("Error submitting recovery:", error);
        }
    };
    
    
    if (loading) {
        return (
            <div className="flex justify-center items-center my-10">
                <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!item) {
        return <div className="text-center text-gray-500">Item not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
            <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold mb-5">{item.itemName}</h2>
                {/* Display the type or category of the item */}
                <p className="text-gray-700 mb-4"><strong>Type:</strong> {item.category || "Unknown"}</p> {/* Add this line */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-md mb-5"
                />
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-gray-700 mb-4"><strong>Location:</strong> {item.location}</p>
                <p className="text-gray-700 mb-4"><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
            </div>
    
            {item.status === 'recovered' ? (
                <div className="mt-6 flex justify-center items-center space-x-2 p-4 bg-green-100 border border-green-400 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l5-5-5-5m7 5H3"/>
                    </svg>
                    <p className="text-green-600 font-semibold text-lg">This item has been successfully recovered!</p>
                </div>
            ) : (
                <div className="mt-6 space-y-4">
                    <button
                        onClick={() => {
                            setSelectedAction("Found This");
                            setModalOpen(true);
                        }}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        Found This!
                    </button>
                    <button
                        onClick={() => {
                            setSelectedAction("This is Mine");
                            setModalOpen(true);
                        }}
                        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                    >
                        This is Mine!
                    </button>
                </div>
            )}
    
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Recovery Information</h3>
                        <form onSubmit={handleRecoverySubmit}>
                            <div className="mb-4">
                                <label htmlFor="itemName" className="block text-lg font-medium mb-2">
                                    Item Name:
                                </label>
                                <p className="text-lg font-medium">{item.itemName}</p> {/* Added Item Name */}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="recoveredLocation" className="block text-lg font-medium mb-2">
                                    Recovered Location:
                                </label>
                                <input
                                    type="text"
                                    id="recoveredLocation"
                                    value={recoveredLocation}
                                    onChange={(e) => setRecoveredLocation(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="recoveredDate" className="block text-lg font-medium mb-2">
                                    Recovery Date:
                                </label>
                                <DatePicker
                                    selected={recoveredDate}
                                    onChange={(date) => setRecoveredDate(date)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium">Recovered By:</h4>
                                <p>{user?.displayName}</p>
                                <p>{user?.email}</p>
                                {user?.photoURL && (
                                    <img src={user.photoURL} alt={user.displayName} className="w-12 h-12 rounded-full" />
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                            >
                                Submit Recovery Information
                            </button>
                        </form>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDetailsPage;
