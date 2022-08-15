import React from "react";
import { Modal, Row, Checkbox, Button, Text } from "@nextui-org/react";

export default function App({ id }) {
  const [visible, setVisible] = React.useState(false);
  console.log(id);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button
        auto
        color="secondary"
        style={{ background: "#7828c8" }}
        onClick={handler}
      >
        Preview
      </Button>
      <Modal
        closeButton
        blur
        width="600px"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row justify="space-between">{id}</Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto color="secondary" onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
