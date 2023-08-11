import React from "react";
import styles from "../styles/pages/nav.module.scss";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

type Props = {};

function Nav({}: Props) {
  return (
    <div className={styles.nav}>
      <h2 className={styles.motto}>Be The Style Icon</h2>
      <div className={styles.navOptions}>
        <h1>ELEGANT</h1>
        <div>
          <h5>Home</h5>
          <h5>Women</h5>
          <h5>Men</h5>
          <h5>About</h5>
        </div>
      </div>
      <div className={styles.iconHolder}>
        <FaShoppingCart size={30} />
        <FaSearch size={25} />
      </div>
    </div>
  );
}

export default Nav;
