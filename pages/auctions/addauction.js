import React from "react";
import { Textarea, Grid, Input } from "@nextui-org/react";

const addauction = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center min-h-screen mt-16 -z-50">
      <h2 className="my-5 text-xl">Add Auction</h2>
      <form onChange={handleSubmit}>
        <Grid.Container gap={3} justify="center">
          <Grid xs={12}>
            <Input
              width="100%"
              clearable
              bordered
              labelPlaceholder="Name"
              color="secondary"
            />
          </Grid>
          <Grid xs={12}>
            <Textarea
              width="100%"
              size="lg"
              bordered
              color="secondary"
              labelPlaceholder="Details"
            />
          </Grid>
        </Grid.Container>
      </form>
    </div>
  );
};

export default addauction;
