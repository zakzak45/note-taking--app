import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
     <input id="search" placeholder="search note"/>
     <svg for="search"stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle>
     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
     </svg>
      </div>
    </nav>
  );
};

export default Navbar;
