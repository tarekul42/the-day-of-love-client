import Navbar from '@/components/ui/Navbar';
import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '@/components/ui/Footer';

const MainLayout = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('authentication');

    return (
            <>
        <div className="relative min-h-screen flex flex-col">
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
        </>
    );
};

export default MainLayout;