import React, { useState } from "react";
import styles from "./NavbarOne.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarOne = ({ navbarLinks }) => {
  const [activeLink, setActiveLink] = useState(navbarLinks[0].name);
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ul className={styles["navbar__wrapper"]}>
          {navbarLinks.map((link) => (
            <li
              className={`${styles["navbar__item"]} ${
                activeLink === link.name ? styles.active : ""
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              <a href="#" className={styles["navbar__item-wrapper"]}>
                <span className={styles["navbar__item-icon"]}>
                  <FontAwesomeIcon icon={link.icon} />
                </span>
                <span className={styles["navbar__item-text"]}>{link.name}</span>
              </a>
            </li>
          ))}
          <div className={styles["navbar__indicator"]}></div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarOne;
