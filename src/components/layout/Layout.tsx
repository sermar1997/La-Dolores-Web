import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
