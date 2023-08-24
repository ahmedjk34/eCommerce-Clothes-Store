import { useNavigate } from "react-router-dom";
import video from "../assets/bgv.mp4";
import styles from "../styles/pages/home.module.scss";
type Props = {};

function Home({}: Props) {
  const navigate = useNavigate();
  function handelClick(page: String) {
    navigate(`${page}`);
  }
  return (
    <div className={styles.home}>
      <video muted autoPlay loop className={styles.heroVideo}>
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={() => handelClick("/women")}>Women's Collection</button>
      <button onClick={() => handelClick("/men")}>Mens's Collection</button>
    </div>
  );
}

export default Home;
