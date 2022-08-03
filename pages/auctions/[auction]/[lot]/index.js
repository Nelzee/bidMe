import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router.query.lot);
  return <div>Lot</div>;
};

export default Index;
