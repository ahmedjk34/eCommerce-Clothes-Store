import axios from "axios";
import styles from "../styles/pages/shop.module.scss";
import heroImg from "../assets/womenHero.jpg";
import React, { useEffect, useState } from "react";
import { Item } from "../Types";

type Props = {};

function Women({}: Props) {
  const [data, setData] = useState<Item | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/women-clothes")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.shop}>
      <img src={heroImg} className={styles.heroImg}></img>
      <div className={styles.shopGradient}></div>
      <div className={styles.shopHero}>
        <h1>WOMEN'S CLOTHING</h1>
      </div>
      <div className={styles.shopMain}>
        <div style={{ "background-color": "red" }}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Women;
