import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import axios from "axios";

const Index = ({ auctions }) => {
  const router = useRouter();

  return (
    <div>
      <Fragment>
        {auctions.map((auction) => {
          return (
            <h3 key={auction._id}>
              <Link href={`auctions/${auction._id}`}>{auction.title}</Link>
            </h3>
          );
        })}
      </Fragment>
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const auctions = await axios.get("http://localhost:3000/api/auctions");
  return {
    props: {
      auctions: auctions.data,
    },
  };
};
