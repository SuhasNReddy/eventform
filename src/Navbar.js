import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css'; // Import the module CSS file

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <li><NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink></li>
        <li><NavLink to="/allRegisters" activeClassName={styles.activeLink}>All Registrations</NavLink></li>
        <li><NavLink to="/register" activeClassName={styles.activeLink}>Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
