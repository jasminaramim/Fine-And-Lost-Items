import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/imgs/silhouette-busy-businesspeople.jpg';
import missionImage from '../assets/imgs/mission-goals-target-aspirations-motivation-strategy-concept.jpg';
import valuesImage from '../assets/imgs/core-values-goals-mission-business-purpose-concept.jpg';
import teamImage from '../assets/imgs/team-teamwork-support-collaboration-concept.jpg';

const AboutUsPage = () => {
    return (
        <div className='mt-10 mx-24'>
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
                            We are a dedicated team committed to reconnecting lost items with their rightful owners...
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-white">
                            <li>🌎 Global Network of Lost & Found</li>
                            <li>🛡️ Secure & Verified Transactions</li>
                            <li>💡 Innovative AI-Powered Solutions</li>
                            <li>🤝 Community-Driven Support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mission Card */}
            <section
                className="about-us bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-xl shadow-lg mb-12 relative"
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                    <div className="flex-1 text-left px-6 py-4">
                        <h2 className="text-3xl sm:text-4xl text-black-800 font-bold mb-4">Our Mission</h2>
                        <p className="text-lg sm:text-xl text-white mb-4">
                            Our mission is to ensure a safe and simple way for people to find and return lost items...
                        </p>
                    </div>
                    <div className="flex-1 max-w-md">
                        <img
                            src={missionImage}
                            alt="Our Mission"
                            className="w-full h-64 object-cover rounded-t-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Values Card */}
            <section
                className="about-us bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl shadow-lg mb-12 relative"
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                    <div className="flex-1 max-w-md">
                        <img
                            src={valuesImage}
                            alt="Our Values"
                            className="w-full h-64 object-cover rounded-t-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1 text-left px-6 py-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Our Values</h2>
                        <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-white mb-4">
                            <li>💡 Innovation</li>
                            <li>🌍 Global Reach</li>
                            <li>🤝 Collaboration</li>
                            <li>🛡️ Integrity</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team Card */}
            <section
                className="about-us bg-gradient-to-r from-indigo-600 via-blue-400 to-purple-600 rounded-xl shadow-lg mb-12 relative"
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                    <div className="flex-1 text-left px-6 py-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-lg sm:text-xl text-white mb-4">
                            Our team consists of dedicated professionals who are passionate about helping people...
                        </p>
                    </div>
                    <div className="flex-1 max-w-md">
                        <img
                            src={teamImage}
                            alt="Our Team"
                            className="w-full h-64 object-cover rounded-t-lg shadow-md"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
