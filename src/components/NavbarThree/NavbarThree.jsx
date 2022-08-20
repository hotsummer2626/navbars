import React from "react";
import styles from "./NavbarThree.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarThree = ({ navbarLinks }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ul className={styles.wrapper}>
          {navbarLinks.map((link) => (
            <li className={styles.link}>
              <a href="#">
                <div className={styles.icon}>
                  <div className={styles["icon-hidden"]}>
                    <FontAwesomeIcon
                      className={styles["icon-item"]}
                      icon={link.icon}
                    />
                    <FontAwesomeIcon
                      className={styles["icon-item"]}
                      icon={link.icon}
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles["text-hidden"]}>
                    <span className={styles["text-item"]}>{link.name}</span>
                    <span className={styles["text-item"]}>{link.name}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarThree;
