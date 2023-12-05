import React from "react";
import "./navbar.scss";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const handleClick = () => {
    window.location.reload();
};


const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            
            <div className="wrapper">
                <motion.span 
                    // initial={{ opacity: 0, x: -50}}
                    // animate={{ opacity: 1, x: 0,  transition: { duration: 0.5 } }}
                    whileHover={{ scale: 1.05, cursor: 'pointer', transition: { duration: 0.3 } }}
                    onClick={handleClick}
                    whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    © Code by Verga Nathanael   
                </motion.span>

                <div className="nav-links">
                    <a href="#About">About</a>
                    <a href="#Work">Work</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;