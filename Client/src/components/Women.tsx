import axios from "axios";
import styles from "../styles/pages/shop.module.scss";
import heroImg from "../assets/womenHero.jpg";
import { useEffect, useState } from "react";
import { Item } from "../Types";
import ShopItem from "./ShopItem";

type Props = {};

function Women({}: Props) {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    axios
      .get("https://ecommerce-clothes-store.vercel.app/women-clothes")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.shop}>
      <div className={styles.shopGradient}></div>
      <div className={styles.shopHero}>
        <h1>WOMEN'S CLOTHING</h1>
        <img src={heroImg} className={styles.heroImg}></img>
      </div>
      <div className={styles.shopMain}>
        {data?.map((item, index) => (
          <ShopItem item={item} key={`item${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Women;
