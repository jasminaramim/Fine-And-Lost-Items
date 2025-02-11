import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { faCogs, faCommentDots, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import backgroundImage from '../assets/imgs/silhouette-busy-businesspeople.jpg';
import animationData1 from '../assets/imgs/collage-customer-experience-concept.jpg'; 
import animationData3 from '../assets/imgs/serveices.jpg'; 

import Carousel from '../Compononets/Carousel';
import LatestItemsSection from '../Compononets/LatestItemsSection';

// Import spinner
import { ClipLoader } from 'react-spinners';

const HomePage = () => {
    const [loading, setLoading] = useState(true); // State to track loading
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        
        // Simulating data loading
        setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds (or after your data is fetched)
        }, 3000); // Replace with actual data fetching logic
    }, []);

    if (loading) {
        // Return spinner while data is loading
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#123abc" loading={loading} size={50} />
            </div>
        );
    }

    return (
        <div className='container px-6 py-10 mx-auto'>
            {/* Hero Section */}
            <Carousel />
            <LatestItemsSection />

            {/* Our Services Section */}
            <section className="services mb-10 bg-gradient-to-r from-red-200 via-orange-400 to-orange-600 rounded-xl shadow-lg" data-aos="fade-right">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData3} 
                            alt="Our Services" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                    <div className="flex-1 text-left px-6">
                        <h2 className="text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faCogs} className="mr-3 text-blue-500" /> 
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 my-4">
                            We offer top-notch services to help you recover lost items seamlessly.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>🔍 AI-Powered Lost & Found System</li>
                            <li>📞 24/7 Customer Support</li>
                            <li>🔐 Secure & Verified Listings</li>
                            <li>🚀 Fast Claim Process</li>
                        </ul>
                        <button 
                            onClick={() => navigate('/services')} 
                            className="mt-4 px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-100"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* User Feedback Section */}
            <section className="feedback mb-10 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 rounded-xl shadow-lg" data-aos="fade-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 text-left px-6">
                        <h2 className="text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faCommentDots} className="mr-3 text-yellow-400" />
                            User Feedback
                        </h2>
                        <div className="space-y-6 my-4">
                            <blockquote className="text-xl italic text-gray-600">
                                "This platform helped me get back my lost phone within days. Great service!"
                            </blockquote>
                            <blockquote className="text-xl italic text-gray-600">
                                "I found my lost wallet through this service. Highly recommended!"
                            </blockquote>
                        </div>
                        <button 
                            onClick={() => navigate('/feedback')} 
                            className="mt-4 px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-100"
                        >
                            Read More
                        </button>
                    </div>
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData1} 
                            alt="User Feedback" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section
                className="about-us bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-xl shadow-lg mb-12 relative"
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                    <div className="flex-1 max-w-md mb-6 md:mb-0">
                        <img
                            src={backgroundImage}
                            alt="Our Mission"
                            className="w-full object-cover rounded-t-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1 text-left px-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800 flex items-center space-x-3">
                            <FontAwesomeIcon icon={faUsers} className="text-4xl sm:text-5xl text-yellow-500" />
                            <span>About Us</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-white my-4">
                            We are a dedicated team committed to reconnecting lost items.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-white">
                            <li>🌎 Global Network of Lost & Found</li>
                            <li>🛡️ Secure & Verified Transactions</li>
                            <li>💡 Innovative AI-Powered Solutions</li>
                        </ul>
                        <button 
                            onClick={() => navigate('/about-us')} 
                            className="mt-4 px-6 py-2 border-2 border-blue-300 text-blue-300 font-semibold rounded-lg hover:bg-blue-100"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter my-12 py-12 bg-blue-100 rounded-xl shadow-lg text-center" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-500" />
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-lg text-gray-600 my-4">Stay updated with our latest products and offers.</p>
                <form className="mt-6 flex justify-center">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-1/2 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600">Subscribe</button>
                </form>
            </section>
        </div>
    );
};

export default HomePage;
