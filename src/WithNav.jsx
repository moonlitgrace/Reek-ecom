import React from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header';

export default () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};