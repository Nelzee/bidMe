import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";

const Index = () => {
  const router = useRouter();
  console.log(router.query.auction);

  return (
    <div>
      <Fragment>
        <Link href="beta/45">
          <h3>Lot 45</h3>
        </Link>
      </Fragment>
    </div>
  );
};

export default Index;
