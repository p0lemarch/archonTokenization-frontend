// client/src/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/header.module.css"; // Import the CSS module

const Header = () => {
  return (
    <header className="bg-black py-4">
      <nav className="container mx-auto flex justify-around items-center">
        <Link className={styles.link} to="/">
          ArchonX
        </Link>
        <Link className={styles.link} to="/available-assets">
          Available Assets
        </Link>
        <Link className={styles.link} to="/stats">
          Stats
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/dashboard">
          Dashboard
        </Link>
        <Link className={styles.appLink} to="/launchApp">
          Launch App
        </Link>
      </nav>
    </header>
  );
};

export default Header;
