import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className={styles.projectHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleContainer}>
            <span
              className={styles.projectTitle}
              onClick={() => {
                setShowNav(() => !showNav);
              }}
              aria-hidden="true"
            >
              <b>=</b> HuntMyParadise
            </span>
          </div>
          {showNav && (
            <div className={styles.leftNavigation}>
              <style jsx>{`
                ul li.link:hover {
                  color: #687592;
                  cursor: pointer;
                }
              `}</style>
              <ul>
                <li className="link">Home</li>
                <li className="link">Dashboard</li>
                <li>
                  Search
                  <ul>
                    <li className="link">Category</li>
                    <li className="link">Cities</li>
                    <li className="link">Coordinates</li>
                  </ul>
                </li>
                <li className="link">Map View</li>
                <li className="link">Booked Hotels</li>
                <li className="link">Chat Box</li>
                <li className="link">Booking & Payment</li>
                <li className="link">Profile</li>
                <li className="link">Terms & Conditions</li>
                <li className="link">About</li>
                <li className="link">Contact</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.headerCenter}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search here"
            />
            <div className={styles.searchIconButton}>Search</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.menuContainer}>
            <div className={styles.menuCart}>Cart</div>
            <div className={styles.menuName}>Guest</div>
            <div className={styles.menuDropdown}> Dropdown</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
