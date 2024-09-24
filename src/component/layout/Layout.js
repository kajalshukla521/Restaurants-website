import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cart = [] }) => { // Use default parameter `cart = []`
  return (
    <>
      <Header size={cart.length} /> {/* Safely access cart.length */}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
