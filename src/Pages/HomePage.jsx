import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import backgroundImage2 from '../assets/imgs/3d-illustration-christmas-tree-star-icon-gradient-background.jpg';
import backgroundImage from '../assets/imgs/abstract-design-background.jpg';
import animationData1 from '../assets/service.json'; 
import animationData2 from '../assets/revew.json'; 
import Carousel from '../Compononets/Carousel';
import LatestItemsSection from '../Compononets/LatestItemsSection';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Import icons

const HomePage = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false }); 
    }, []);

    const [typedKey, setTypedKey] = useState(0); // State to force re-render of ReactTyped

    const handleTypedComplete = () => {
        setTypedKey(prevKey => prevKey + 1); 
    };

    // Lottie animation options for Features Section
    const featureOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    // Lottie animation options for Testimonials Section
    const testimonialOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='container px-6 py-10 mx-auto'>
            {/* Carousel Section */}
            <Carousel />

            {/* Latest Items Section */}
            <LatestItemsSection />

            {/* Features Section (with AOS and Lottie) */}
            <section
                className="features my-12 mx-auto py-12 text-white rounded-xl shadow-lg"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1500"
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="flex-1 text-center md:text-left px-6 md:px-12">
                        <h2 className="text-4xl font-bold mb-4 text-yellow-100 flex items-center">
                            <FontAwesomeIcon icon={faStar} className="mr-3 text-yellow-500" /> 
                            Key Features
                        </h2>
                        <p className="text-lg mb-6">
                            <ReactTyped
                                key={typedKey} 
                                strings={["Discover the outstanding features of our platform that help you recover lost items easily."]}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={1500}
                                onComplete={handleTypedComplete}
                                loop={false}  
                            />
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>✅ Secure and Verified Listings</li>
                            <li>✅ Fast and Easy Recovery Process</li>
                            <li>✅ Responsive Customer Support</li>
                        </ul>
                    </div>
                    <div className="flex-1 max-w-xs mx-auto">
                        <Lottie options={featureOptions} height={250} width={250} />
                    </div>
                </div>
            </section>

            {/* Testimonials Section (with AOS and Lottie) */}
            <section
                className="testimonials my-12 py-12 text-white rounded-xl shadow-lg"
                style={{ 
                    backgroundImage: `url(${backgroundImage2})`,  
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1500"
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="flex-1 text-center md:text-left px-6 md:px-12">
                        <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
                            <FontAwesomeIcon icon={faThumbsUp} className="mr-3 text-yellow-400" />
                            What Our Users Say
                        </h2>
                        <p className="text-lg mb-6">
                            <ReactTyped
                                key={typedKey} 
                                strings={["Our users love our platform. Here's what they have to say about their experiences."]}
                                typeSpeed={50}
                                backSpeed={30}
                                backDelay={1500}
                                onComplete={handleTypedComplete}
                                loop={false}  
                            />
                        </p>
                        <div className="space-y-6">
                            <blockquote className="text-xl italic text-white">
                                "This platform helped me get back my lost phone within days. Great service!"
                            </blockquote>
                            <blockquote className="text-xl italic text-white">
                                "I found my lost wallet through this service. Highly recommended!"
                            </blockquote>
                        </div>
                    </div>
                    <div className="flex-1 max-w-xs mx-auto">
                        <Lottie options={testimonialOptions} height={250} width={250} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
