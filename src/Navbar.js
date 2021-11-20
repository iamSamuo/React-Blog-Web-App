import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className="navbar">
      <Link to ='/'className = "title"> The Star </Link>
      <div className = "links">
         <Link to='/'>Home</Link>
         <Link to='/create'>New Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
