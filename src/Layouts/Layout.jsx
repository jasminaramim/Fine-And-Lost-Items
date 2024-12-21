import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Compononets/Navbar';
import Footer from '../Compononets/Footer';



const Layout = ({ children }) => {
    return (
        <div>


            <Navbar></Navbar>
            <main>{children}</main> 
           <Outlet> </Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Layout;
