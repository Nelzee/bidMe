import axios from "axios";
import { useRouter } from "next/router";
import Meta from "../../../../components/Meta";

const Index = ({ lot }) => {
  const router = useRouter();
  return (
    <div>
      <Meta title={lot.title} content={lot.title} />
      <div>{lot.title}</div>
    </div>
  );
};

export default Index;
export const getServerSideProps = async ({ params }) => {
  const lot = await axios.get(`http://localhost:3000/api/Lot/${params.lot}`);
  return {
    props: {
      lot: lot.data,
    },
  };
};
