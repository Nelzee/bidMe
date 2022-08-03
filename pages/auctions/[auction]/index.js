import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import axios from "axios";

const Index = ({ auction }) => {
  const router = useRouter();
  const id = router.query.auction;

  return (
    <div>
      <Fragment>
        <Link href={`beta/${id}`}>
          <h3>{auction.title}</h3>
        </Link>
      </Fragment>
    </div>
  );
};

export default Index;
export const getServerSideProps = async ({ params }) => {
  const auction = await axios(
    `http://localhost:3000/api/auction/${params.auction}`
  );
  return {
    props: {
      auction: auction.data,
    },
  };
};
