import React from "react";
import styles from "../styles/pages/about.module.scss";

type Props = {};

function About({}: Props) {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>About Us</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          turpis mi. Aliquam suscipit enim nec orci dignissim, et pulvinar
          turpis faucibus. Maecenas eget congue justo. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Nunc sed pellentesque metus. Suspendisse vehicula aliquet risus ut
          efficitur. Nunc auctor aliquam dolor vitae posuere. Phasellus libero
          felis, finibus id rhoncus nec, lacinia congue tortor. Suspendisse
          accumsan volutpat tellus, at euismod leo luctus id. Vivamus et sem vel
          ligula imperdiet consectetur. Praesent commodo quam nunc, ultrices
          feugiat sem egestas feugiat.
        </h4>
      </div>
    </div>
  );
}

export default About;
