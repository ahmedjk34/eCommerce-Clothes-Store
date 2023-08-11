import React from "react";
import video from "../assets/bgv.mp4";
import styles from "../styles/pages/home.module.scss";
type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.home}>
      <video muted autoPlay loop className={styles.heroVideo}>
        <source src={video} type="video/mp4" />
      </video>
      <button>Women's Collection</button>
      <button>Mens's Collection</button>
    </div>
  );
}

export default Home;
