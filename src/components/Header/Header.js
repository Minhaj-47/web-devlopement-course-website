// this is header component, it is basically a navbar for the route link
// we set the path in the link for different route
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div className="border-bottom mb-2 p-3 bg-dark text-white text-decoration-none">
            <nav className="w-100">
                <NavLink to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }} 
                >Home</NavLink>
                <NavLink to="/services"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >Services</NavLink>
                <NavLink to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >About</NavLink>
                <NavLink to="/feedback"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >FeedBack</NavLink>
            </nav>
        </div>
    );
};

export default Header;