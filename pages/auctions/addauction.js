import React, { useState } from "react";
import { Textarea, Grid, Input, Button, Spacer } from "@nextui-org/react";
import axios from "axios";

const Addauction = () => {
  const [lotInfo, setLotInfo] = useState({
    name: "",
    details: "",
    file: "",
  });

  const handleChange = (e) => {
    setLotInfo((lotInfo) => {
      return { ...lotInfo, [e.target.name]: e.target.value };
    });
  };

  const handleFileChange = (e) => {
    setLotInfo((lotInfo) => {
      return { ...lotInfo, file: e.target.files[0] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", lotInfo.name);
    formData.append("details", lotInfo.details);
    formData.append("file", lotInfo.file);

    console.log(formData);

    const { data } = await axios.post("../api/Lot/addlot", formData);
  };
  return (
    <div className="flex flex-col items-center min-h-screen mt-16 -z-50">
      <h2 className="my-5 text-xl">Add Auction</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid.Container gap={3} justify="center">
          <Grid xs={12}>
            <Input
              name="name"
              onChange={handleChange}
              width="100%"
              clearable
              bordered
              labelPlaceholder="Name"
              color="secondary"
            />
          </Grid>
          <Grid xs={12}>
            <Input
              onChange={handleFileChange}
              filename="file"
              type={"file"}
              width="100%"
              size="lg"
              color="secondary"
            />
          </Grid>
          <Grid xs={12}>
            <Textarea
              name="details"
              onChange={handleChange}
              width="100%"
              size="lg"
              bordered
              color="secondary"
              labelPlaceholder="Details"
            />
          </Grid>
          <Grid>
            <Button type="submit" color="secondary">
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </div>
  );
};

export default Addauction;
