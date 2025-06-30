import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <main className="">
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;