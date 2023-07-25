import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          Settings
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" className={({ isActive }) => `${isActive ? styles.activeLink : ""}`}
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
