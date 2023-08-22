import React from "react";
import { Item } from "../Types";
import styles from "../styles/pages/cart.module.scss";
import { addToCart, removeFromCart } from "./Functions/cartHandler";

type Props = {
  item: Item;
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[] | null>>;
};

function CartItem({ item, cart, setCart }: Props) {
  function controlQuantity(action: String) {
    if (action == "Increment") {
      addToCart({ item, cart, setCart });
    } else {
      removeFromCart({ item, cart, setCart });
    }
  }
  return (
    <div className={styles.cartItem}>
      <img src={item.image}></img>
      <div className={styles.itemDesc}>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.controlPrice}>
          <h2> Price : {(item.price * (item?.count ?? 0)).toFixed(2)}$</h2>
          <h4>
            {item.price.toFixed(2)} X {item.count}
          </h4>
        </div>
        <div className={styles.controlQuantity}>
          <h3
            className={styles.slider}
            onClick={() => controlQuantity("Increment")}
          >
            +
          </h3>
          <h3>{item.count}</h3>
          <h3
            className={styles.slider}
            onClick={() => controlQuantity("Decrement")}
          >
            -
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
