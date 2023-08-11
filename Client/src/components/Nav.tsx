import React from "react";
import styles from "../styles/pages/nav.module.scss";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};
function Nav({}: Props) {
  const navigate = useNavigate();
  function handelClick(page) {
    navigate(`${page}`);
  }

  return (
    <div className={styles.nav}>
      <h2 className={styles.motto}>Be The Style Icon</h2>
      <div className={styles.navOptions}>
        <h1>ELEGANT</h1>
        <div>
          <h5 onClick={() => handelClick("/")}>Home</h5>
          <h5 onClick={() => handelClick("/women")}>Women</h5>
          <h5 onClick={() => handelClick("/men")}>Men</h5>
          <h5 onClick={() => handelClick("/about")}>About</h5>
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
