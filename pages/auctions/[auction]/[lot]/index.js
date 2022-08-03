import axios from "axios";
import { useRouter } from "next/router";
import Meta from "../../../../components/Meta";

const Index = () => {
  const router = useRouter();
  return (
    <div>
      <Meta title="Lot - 45" content="Lot - 45" />
      Lot
    </div>
  );
};

export default Index;
