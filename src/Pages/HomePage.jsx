import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCommentDots, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from "react-spinners";

import backgroundImage from '../assets/imgs/silhouette-busy-businesspeople.jpg';
import animationData1 from '../assets/imgs/collage-customer-experience-concept.jpg'; 
import animationData3 from '../assets/imgs/serveices.jpg'; 

import Carousel from '../Compononets/Carousel';
import LatestItemsSection from '../Compononets/LatestItemsSection';

const HomePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init({ duration: 1000, once: false });

        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1500); // Adjust the delay as needed
    }, []);

    return (
        <div className='container px-6 py-10 mx-auto'>
            {/* Show Spinner While Loading */}
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <ClipLoader color="#FF4500" size={50} />
                </div>
            ) : (
                <>
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

                    {/* Customer Testimonials Section */}
                    <section className="testimonials mb-10 bg-white rounded-xl shadow-lg py-10" data-aos="fade-up">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
                                <FontAwesomeIcon icon={faCommentDots} className="mr-3 text-yellow-500" /> 
                                Customer Testimonials
                            </h2>
                            <p className="text-lg text-gray-600 my-4">
                                Hear what our satisfied customers have to say about our service.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                <div className="p-6 border rounded-lg shadow-md">
                                    <p className="italic text-gray-700">"The best lost & found service I've ever used!"</p>
                                    <span className="block mt-3 font-bold">- John Doe</span>
                                </div>
                                <div className="p-6 border rounded-lg shadow-md">
                                    <p className="italic text-gray-700">"Quick and reliable service, highly recommend!"</p>
                                    <span className="block mt-3 font-bold">- Jane Smith</span>
                                </div>
                                <div className="p-6 border rounded-lg shadow-md">
                                    <p className="italic text-gray-700">"Helped me find my lost phone in just a day!"</p>
                                    <span className="block mt-3 font-bold">- Alex Johnson</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Us Section */}
                    <section className="contact mb-10 bg-gray-200 rounded-xl shadow-lg py-10" data-aos="fade-left">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-green-500" /> 
                                Contact Us
                            </h2>
                            <p className="text-lg text-gray-600 my-4">
                                Have any questions? Feel free to reach out to us!
                            </p>
                            <button 
                                onClick={() => navigate('/contact')} 
                                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default HomePage;
