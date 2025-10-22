import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error404 = () => {
    return (
        <div className='bg-[#0F172A] text-white '>
            <Navbar></Navbar>
            <div className='grid justify-center items-center h-screen'>
                <div className='text-center'>
                    <h1 className='text-5xl font-semibold'>Error 404</h1>
                <p>page not found</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;