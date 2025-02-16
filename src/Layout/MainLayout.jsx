import Navbar from '@/components/ui/Navbar';
import { Outlet } from "react-router-dom";
import React from 'react';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;