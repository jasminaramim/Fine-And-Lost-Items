import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { faCogs, faCommentDots, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import animationData1 from '../assets/imgs/collage-customer-experience-concept.jpg'; 
import animationData3 from '../assets/imgs/confident-call-center-operator-talking-with-client.jpg'; 

const FeedbackPage = () => {
    return (
        <div className='mx-6 md:mx-24 mt-10'>
            
            {/* User Feedback Section */}
            <section className="feedback mb-10 bg-gradient-to-r from-blue-200 via-blue-400 to-yellow-700 rounded-xl shadow-lg" data-aos="fade-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 text-left px-6 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faCommentDots} className="mr-3 text-yellow-400" />
                            User Feedback
                        </h2>
                        <div className="space-y-6 my-4">
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "This platform helped me get back my lost phone within days. Great service!"
                            </blockquote>
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "I found my lost wallet through this service. Highly recommended!"
                            </blockquote>
                        </div>
                    </div>
                    <div className="flex-1 max-w-md mx-auto mt-6 md:mt-0">
                        <img 
                            src={animationData1} 
                            alt="User Feedback" 
                            className="w-full object-cover shadow-md rounded-lg" 
                        />
                    </div>
                </div>
            </section>

            {/* Customer Support Section */}
            <section className="customer-support mb-10 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700 rounded-xl shadow-lg" data-aos="fade-right">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 max-w-md mx-auto mb-6 md:mb-0">
                        <img 
                            src={animationData3} 
                            alt="Customer Support" 
                            className="w-full object-cover shadow-md rounded-lg" 
                        />
                    </div>
                    <div className="flex-1 text-left px-6 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faUsers} className="mr-3 text-blue-400" />
                            Customer Support
                        </h2>
                        <div className="space-y-6 my-4">
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "Amazing customer service! They helped me find my lost item quickly."
                            </blockquote>
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "The support team is always available and ready to assist. Highly appreciated!"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="our-services mb-10 bg-gradient-to-r from-green-200 via-green-400 to-green-700 rounded-xl shadow-lg" data-aos="fade-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 text-left px-6 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faCogs} className="mr-3 text-green-400" />
                            Our Services
                        </h2>
                        <div className="space-y-6 my-4">
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "We offer a reliable and fast lost and found service that guarantees recovery."
                            </blockquote>
                            <blockquote className="text-lg md:text-xl italic text-gray-600">
                                "Our team works tirelessly to return your lost belongings in the shortest time possible."
                            </blockquote>
                        </div>
                    </div>
                    <div className="flex-1 max-w-md mx-auto mt-6 md:mt-0">
                        <img 
                            src={animationData3} 
                            alt="Our Services" 
                            className="w-full object-cover shadow-md rounded-lg" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeedbackPage;
