import { useContext } from "react";
import { Item } from "../Types";
import styles from "../styles/pages/shop.module.scss";
import { cartContext } from "../App";
import { addToCart } from "./Functions/cartHandler";

type Props = {
  item: Item;
};

function ShopItem({ item: item }: Props) {
  const { cart, setCart } = useContext(cartContext);

  return (
    <div
      className={styles.shopItem}
      onClick={() => addToCart({ item, cart, setCart })}
    >
      <div>
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className={styles.priceHolder}>{item.price}$</div>
      <div className={styles.itemOverlay}>
        <h2>{item.title}</h2>
        <h5>{item.description}</h5>
      </div>
    </div>
  );
}

export default ShopItem;
