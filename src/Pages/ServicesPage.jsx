import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCommentDots, faUsers, faEnvelope, faLock, faClock } from '@fortawesome/free-solid-svg-icons';

import animationData1 from '../assets/imgs/colleagues-working-together-call-center-with-headphones.jpg'; 
import animationData3 from '../assets/imgs/close-up-people-volunteer-teamwork-putting-finger-star-shapehands-togetherstack-handsunity-teamwork-world-environment-day.jpg'; 
import animationData4 from '../assets/imgs/privacy-security-data-protection-shield-graphic-concept.jpg'; // New image for security section
import animationData5 from '../assets/imgs/Screenshot 2025-02-12 001926.png'; // New image for fast process section

const ServicesPage = () => {
    return (
        <div className='mx-4 md:mx-24 mt-10'>
            {/* Service 1 - General Services */}
            <section className="services mb-10 bg-gradient-to-r from-red-200 via-orange-400 to-orange-600 rounded-xl shadow-lg" data-aos="fade-right">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData3} 
                            alt="Our Services" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                    <div className="flex-1 text-left px-6 mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
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
                    </div>
                </div>
            </section>

            {/* Service 2 - Secure Services */}
            <section className="services mb-10 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-xl shadow-lg" data-aos="fade-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 text-left px-6 mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faLock} className="mr-3 text-green-500" /> 
                            Secure & Verified Listings
                        </h2>
                        <p className="text-lg text-gray-600 my-4">
                            We ensure that all lost and found listings are fully verified for your safety.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>🔐 Trusted Platform</li>
                            <li>🔍 Verified Listings</li>
                            <li>⚡ Instant Notification Alerts</li>
                            <li>🛡️ Your Data is Safe</li>
                        </ul>
                    </div>
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData4} 
                            alt="Secure Services" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                </div>
            </section>

            {/* Service 3 - Customer Support */}
            <section className="services mb-10 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 rounded-xl shadow-lg" data-aos="fade-right">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData1} 
                            alt="Customer Support" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                    <div className="flex-1 text-left px-6 mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faCommentDots} className="mr-3 text-yellow-500" /> 
                            24/7 Customer Support
                        </h2>
                        <p className="text-lg text-gray-600 my-4">
                            Our customer support is available 24/7 to help you with any inquiries or issues.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>📞 Always Available</li>
                            <li>👨‍💻 Support via Multiple Channels</li>
                            <li>🔧 Quick Problem Resolution</li>
                            <li>⚡ Live Chat Option</li>
                        </ul>
                    </div>
                </div>
            </section>

          

            {/* Service 5 - Community Support */}
            <section className="services mb-10 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 rounded-xl shadow-lg" data-aos="fade-right">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                 
                    <div className="flex-1 text-left px-6 mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faUsers} className="mr-3 text-teal-500" /> 
                            Community Support
                        </h2>
                        <p className="text-lg text-gray-600 my-4">
                            Join our community to share and receive lost & found items more effectively.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>💬 Connect with Other Users</li>
                            <li>🤝 Share Your Experiences</li>
                            <li>👥 Access Community Resources</li>
                            <li>📚 Learn from Others' Success Stories</li>
                        </ul>
                    </div>
                    <div className="flex-1 max-w-md mx-auto">
                        <img 
                            src={animationData3} 
                            alt="Community Support" 
                            className="w-full object-cover shadow-md" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
