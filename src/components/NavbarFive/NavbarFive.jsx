import React, { useState } from "react";
import styles from "./NavbarFive.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarFive = ({ navbarLinks }) => {
  const [activeLink, setActiveLink] = useState(navbarLinks[0].name);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ul className={styles.wrapper}>
          {navbarLinks.map((link) => (
            <li
              className={`${styles.item} ${
                activeLink === link.name ? styles.active : ""
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              <a href="#">
                <div className={styles["icon-wrapper"]}>
                  <FontAwesomeIcon className={styles.icon} icon={link.icon} />
                </div>
                <div className={styles.name}>{link.name}</div>
              </a>
              <div className={styles.light}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarFive;
