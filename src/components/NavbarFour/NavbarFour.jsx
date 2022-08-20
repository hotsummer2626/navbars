import React, { useState } from "react";
import styles from "./NavbarFour.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NavbarFour = ({ navbarLinks }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navbarLinks[0].name);

  return (
    <div className={styles.background}>
      <ul
        className={`${styles.container} ${isNavbarOpen ? styles.active : ""}`}
      >
        <div className={styles.circleBg}></div>
        <div
          className={styles.toggle}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {navbarLinks.map((link, index) => (
          <li
            className={`${styles.link} ${
              activeLink === link.name ? styles.active : ""
            }`}
            style={{ "--i": index }}
            onClick={() => setActiveLink(link.name)}
          >
            <a>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
        <div className={styles.indicator}></div>
      </ul>
    </div>
  );
};

export default NavbarFour;
