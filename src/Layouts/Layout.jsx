import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Compononets/Navbar';
import Footer from '../Compononets/Footer';

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className={darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>{children}</main>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
