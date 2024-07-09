import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Car/Bike Rentals</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
