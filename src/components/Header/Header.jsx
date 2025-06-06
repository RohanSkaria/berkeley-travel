import React from 'react';
import { Search, Menu } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          {/* Menu Icon */}
          <div className={styles.iconButton}>
            <Menu className={styles.icon} />
          </div>
          
          {/* Logo - Centered */}
          <div className={styles.logo}>
            <h1>→Berkeley's Northside Travel←</h1>
          </div>
          
          {/* Search and Enquire */}
          <div className={styles.actions}>
            <div className={styles.iconButton}>
              <Search className={styles.icon} />
            </div>
            <div className={styles.enquireButton}>
              <span>ENQUIRE</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className={styles.navigation}>
          <nav className={styles.nav}>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT US</a>
            <a href="#contact">CONTACT</a>
            <a href="tel:510-843-1000">CALL NOW</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;