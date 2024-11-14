import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 h-16 mb-6 flex justify-between items-center px-3 text-white">
      <div className="logo font-bold text-2xl">
        <Link to="/">ContactHub</Link>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/get-all-contacts">View Contacts</Link>
        </li>
        <li>
          <Link to="/add-contact">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
