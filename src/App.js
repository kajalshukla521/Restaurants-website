import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/layout/Layout";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Allcategories from "./pages/Allcategories/Allcategories";
import SweetsPage from "./pages/Allcategories/Sweete";
import Cookies from "./pages/Allcategories/Cookies";
import Cake from "./pages/Allcategories/Cake";
import  Icecream  from "./pages/Allcategories/Icecream";
import Pasta from "./pages/Allcategories/Pasta";
import Sandwhich from "./pages/Allcategories/Sandwhich";
import Addtocard from "./pages/Addtocard";
import CartContext  from "./pages/CartContext"; 

function App() {
  // Cart state to manage items
  const [cart, setCart] = useState([]);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn ? children : <Navigate to="/Login" />;
  };

  return (
    <div>
      <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Allcategories" element={<Allcategories />} />
            <Route path="/Addtocard" element={<Addtocard />} />

            <Route path="/sweets" element={<SweetsPage />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/icecream" element={<Icecream />} />
            <Route path="/pasta" element={<Pasta />} />
            <Route path="/sandwich" element={<Sandwhich />} />
            <Route path="/ CartContext"  element={<CartContext/>}/>  

            {/* Fallback Route for 404 Page */}
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
