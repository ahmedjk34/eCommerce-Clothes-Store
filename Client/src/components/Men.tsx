import axios from "axios";
import React, { useEffect, useState } from "react";
import heroImg from "../assets/menHero.jpg";
import styles from "../styles/pages/shop.module.scss";

import { Item } from "../Types";

type Props = {};

function Men({}: Props) {
  const [data, setData] = useState<Item | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/men-clothes")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.shop}>
      <img src={heroImg} className={styles.heroImg}></img>
      <div className={styles.shopGradient}></div>
    </div>
  );
}

export default Men;
