import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";

const Index = () => {
  const router = useRouter();

  return (
    <div>
      <Fragment>
        <Link href="/auctions/auction/beta">
          <h3>Beta bricks auction</h3>
        </Link>
      </Fragment>
    </div>
  );
};

export default Index;
