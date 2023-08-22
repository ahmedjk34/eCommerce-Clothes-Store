import React, { DOMElement, useContext, useRef } from "react";
import styles from "../styles/pages/nav.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../App";
import { ContextType, Item } from "../Types";

type Props = {};
function Nav({}: Props) {
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const { cart, setCart } = useContext(cartContext) as ContextType;
  function handelClick(page: String): void {
    navigate(`${page}`);
  }
  function handelNavAnimation(
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (document.documentElement.scrollTop || e?.type == "mouseenter")
      navRef.current?.classList.add(styles.active);
    else if (
      document.documentElement.scrollTop <= 40 ||
      e?.type == "mouseleave"
    )
      navRef.current?.classList.remove(styles.active);
  }
  window.onscroll = () => {
    handelNavAnimation();
  };
  return (
    <div
      className={styles.nav}
      ref={navRef}
      onMouseEnter={(e) => handelNavAnimation(e)}
      onMouseLeave={(e) => handelNavAnimation(e)}
    >
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
        <FaShoppingCart size={33} onClick={() => handelClick("/cart")} />
        <span className={styles.itemNumber}>
          {cart.reduce(
            (acc: number, item: Item) => acc + (item?.count ?? 0),
            0
          )}
        </span>
      </div>
    </div>
  );
}

export default Nav;
