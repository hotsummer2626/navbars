import React from "react";
import styles from "./NavbarOne.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faMessage,
  faImage,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const NavbarOne = () => {
  return (
    <div className={styles.container}>
      <ul className={styles["navbar__wrapper"]}>
        <li className={styles["navbar__item"]}>
          <a href="#" className={styles["navbar__item-wrapper"]}>
            <span className={styles["navbar__item-icon"]}>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span className={styles["navbar__item-text"]}>Home</span>
          </a>
        </li>
        <li className={styles["navbar__item"]}>
          <a href="#" className={styles["navbar__item-wrapper"]}>
            <span className={styles["navbar__item-icon"]}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={styles["navbar__item-text"]}>Profile</span>
          </a>
        </li>
        <li className={styles["navbar__item"]}>
          <a href="#" className={styles["navbar__item-wrapper"]}>
            <span className={styles["navbar__item-icon"]}>
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className={styles["navbar__item-text"]}>Message</span>
          </a>
        </li>
        <li className={styles["navbar__item"]}>
          <a href="#" className={styles["navbar__item-wrapper"]}>
            <span className={styles["navbar__item-icon"]}>
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className={styles["navbar__item-text"]}>Photos</span>
          </a>
        </li>
        <li className={styles["navbar__item"]}>
          <a href="#" className={styles["navbar__item-wrapper"]}>
            <span className={styles["navbar__item-icon"]}>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className={styles["navbar__item-text"]}>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarOne;
