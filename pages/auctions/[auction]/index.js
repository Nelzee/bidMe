import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

const Index = ({ lots }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen mt-24 -z-50">
      <Meta
        title={lots[0]?.auction.title || "Auction"}
        content={lots[0]?.auction.title || "Auction"}
      />
      {lots.map((lot) => (
        <div key={lot._id}>
          <h3>{lot.title}</h3>
          <Link href={lot.auction.title.split(" ").join("-") + "/" + lot._id}>
            <button>View Lot</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Index;
export const getServerSideProps = async ({ params }) => {
  const lots = await axios.get(
    `http://localhost:3000/api/Lots/${params.auction}`
  );
  return {
    props: {
      lots: lots.data,
    },
  };
};
