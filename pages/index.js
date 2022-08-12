import { useDispatch } from "react-redux";
import Meta from "../components/Meta";
import { addbid } from "../redux/bidsSlice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const handleTest = () => {
    dispatch(addbid({ name: "test" }));
  };

  return (
    <div className={styles.container}>
      <Meta
        title="BidMe auctions"
        content="see what we have instore for you here at bidme"
      />
      <h1>BidMe auctions</h1>
      <button onClick={handleTest}></button>
    </div>
  );
}
