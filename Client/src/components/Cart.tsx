import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../App";
import heroImg from "../assets/cartHero.jpg";
import styles from "../styles/pages/cart.module.scss";
import { ContextType, Item } from "../Types";
import CartItem from "./CartItem";
type Props = {};

function Cart({}: Props) {
  function calculateTotal() {
    return Number(
      cart.reduce(
        (acc: number, item: Item) => acc + item?.price * (item?.count ?? 0),
        0
      )
    ).toFixed(2);
  }
  const { cart, setCart } = useContext(cartContext) as ContextType;
  const [total, setTotal] = useState(calculateTotal());
  useEffect(() => {
    setTotal(calculateTotal());
    console.log(cart);
  }, [cart]);
  return (
    <div className={styles.cart}>
      <div className={styles.cartGradient}></div>
      <div className={styles.cartHero}>
        <img src={heroImg} className={styles.heroImg}></img>
        <h1>SHOPPING CART</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.cartItemsContainer}>
          {cart.map((item) => (
            <CartItem item={item} cart={cart} setCart={setCart}></CartItem>
          ))}
        </div>
        <div className={styles.checkout}>
          <h2>Checkout</h2>
          <h3>Total : {total}$</h3>
          <button onClick={() => setCart([])}>Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
