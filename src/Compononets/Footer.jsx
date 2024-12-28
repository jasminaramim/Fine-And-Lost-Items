import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Lottie } from 'lottie-react'; // Ensure correct import
import lottieAnimation from '../assets/footerlottie.json'; // Your Lottie animation JSON file
import Lottie from 'lottie-react';
import footerBG from '../assets/imgs/grunge-metal-texture.jpg'; // Correct import for background image

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); 
  }, []);

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${footerBG})` }} 
    >
      <div className="absolute inset-0 "></div> 
      <div className="container mx-auto px-6 text-white relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        
          <div className="space-y-6" data-aos="fade-up">
            <h3 className="text-2xl font-semibold">Find Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="hover:text-yellow-400">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400">Contact</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-yellow-400">Blog</a>
              </li>
            </ul>
          </div>

          {/* Footer Center - Social Icons */}
          <div className="space-y-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-yellow-400">Facebook</a>
              <a href="#" className="hover:text-yellow-400">Twitter</a>
              <a href="#" className="hover:text-yellow-400">Instagram</a>
              <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            </div>
          </div>

          {/* Footer Right - Lottie Animation */}
          <div className="space-y-6 text-center" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-semibold">Explore More</h3>
            <Lottie animationData={lottieAnimation} loop={true} className="mx-auto w- h-40" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved. Find & Lost Items</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
