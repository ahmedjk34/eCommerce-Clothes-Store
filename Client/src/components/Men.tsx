import axios from "axios";
import { useEffect, useState } from "react";
import heroImg from "../assets/menHero.jpg";
import styles from "../styles/pages/shop.module.scss";

import { Item } from "../Types";
import ShopItem from "./ShopItem";

type Props = {};

function Men({}: Props) {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    axios
      .get("https://ecommerce-clothes-store.vercel.app/men-clothes")
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
      {data ? (
        <div className={styles.shopMain}>
          {data?.map((item, index) => (
            <ShopItem item={item} key={`item${index}`} />
          ))}
        </div>
      ) : (
        <div className={styles.loading}>Loading....</div>
      )}
    </div>
  );
}

export default Men;
