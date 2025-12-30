import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/home/home/shared/navbar/Navbar';
import Footer from '../pages/home/home/shared/navbar/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;