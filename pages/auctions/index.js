import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import axios from "axios";
import Meta from "../../components/Meta";
import {
  Pagination,
  Grid,
  Card,
  Text,
  Button,
  Row,
  Modal,
  Checkbox,
} from "@nextui-org/react";
import PreviewAuction from "../../components/PreviewAuction";

const Index = ({ auctions }) => {
  const router = useRouter();
  const [pagination, setPagination] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const handleNav = (e, link) => {
    setShowPreview((showPreview) => !showPreview);
    console.log(link);
  };

  const handlePagin = (e) => {
    setPagination(e.target);
  };

  return (
    <div className="flex flex-col items-center max-w-screen-lg min-h-screen mx-auto mt-24 -z-50">
      <Meta title="Auctions" content="Auctions" />
      <h2 className="text-4xl">Auctions</h2>
      <Grid.Container gap={3} justify="center">
        {auctions &&
          auctions.map((auction) => {
            return (
              <Grid css={{ justifyContent: "center" }} key={auction._id} xs={4}>
                <Card
                  onClick={(e) => {
                    handleNav(e, auction._id);
                  }}
                  css={{ mw: "330px" }}
                >
                  <Card.Header>
                    <Text b css={{ textAlign: "center", width: "100%" }}>
                      {auction.title}
                    </Text>
                  </Card.Header>
                  <Card.Divider />
                  <Card.Body css={{ py: "$10" }}>
                    <Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </Text>
                  </Card.Body>
                  <Card.Divider />
                  <Card.Footer>
                    <Row justify="space-between" align="center">
                      <PreviewAuction title={auction.title} id={auction._id} />
                      <Text>Auction Ends soon</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            );
          })}
      </Grid.Container>
      <Pagination
        onChange={handlePagin}
        color="secondary"
        controls={false}
        total={
          auctions.length % 6 > 0
            ? auctions.length / 6 + 1
            : auctions.length / 6
        }
        page={pagination}
        initialPage={1}
      />
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
