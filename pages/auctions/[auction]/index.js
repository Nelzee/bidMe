import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import {
  Pagination,
  Grid,
  Card,
  Text,
  Button,
  Row,
  Modal,
  Col,
} from "@nextui-org/react";

const Index = ({ lots }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center max-w-screen-lg min-h-screen mx-auto mt-24 -z-50">
      <Meta
        title={lots[0]?.auction.title || "Auction"}
        content={lots[0]?.auction.title || "Auction"}
      />
      <h2 className="text-4xl">Lots</h2>
      <Grid.Container gap={2} justify="center">
        {lots &&
          lots.map((lot) => {
            return (
              <Grid css={{ justifyContent: "center" }} key={lot.title} xs={4}>
                <Card gap={2} xs={4} css={{ w: "100%", h: "400px" }}>
                  <Card.Header
                    css={{ position: "absolute", zIndex: 1, top: 5 }}
                  >
                    <Col>
                      <Text
                        size={12}
                        weight="bold"
                        transform="uppercase"
                        color="#ffffffAA"
                      >
                        New
                      </Text>
                      <Text h3 color="black">
                        Acme camera
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Card example background"
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop:
                        "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={12}>
                          Available soon.
                        </Text>
                        <Text color="#000" size={12}>
                          Get notified.
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button flat auto rounded color="secondary">
                            <Text
                              css={{ color: "inherit" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Notify Me
                            </Text>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            );
          })}
      </Grid.Container>
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
