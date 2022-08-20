import React, { useState } from "react";
import styles from "./NavbarTwo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NavbarTwo = ({ navbarLinks }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className={styles.background}>
      <ul className={styles.container}>
        <div
          className={`${styles.toggle} ${isNavbarOpen ? styles.active : ""}`}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {navbarLinks.map((link, index) => (
          <li className={styles.link} style={{ "--i": index }}>
            <a href="#">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarTwo;
