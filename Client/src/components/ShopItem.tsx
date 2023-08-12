import React from "react";
import { Item } from "../Types";
import styles from "../styles/pages/shop.module.scss";

type Props = {
  data: Item;
};

function ShopItem({ data }: Props) {
  return (
    <div className={styles.shopItem}>
      <img src={data.image} alt={data.title}></img>
      <div className={styles.priceHolder}>{data.price}$</div>
      <div className={styles.itemOverlay}>
        <h2>{data.title}</h2>
        <h5>{data.description}</h5>
      </div>
    </div>
  );
}

export default ShopItem;
