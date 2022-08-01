import Meta from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta
        title="Home"
        content="see what we have instore for you here at bidme"
      />
      <h1>BidMe auctions</h1>
    </div>
  );
}
