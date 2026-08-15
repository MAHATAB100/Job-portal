import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Register from '../pages/Register/Register';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;