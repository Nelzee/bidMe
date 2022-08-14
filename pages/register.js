import axios from "axios";
import React, { useState } from "react";
import { Textarea, Grid, Input, Button, Loading } from "@nextui-org/react";
import Meta from "../components/Meta";

export default function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const loading = true;

  const [validPass, setValidPass] = useState(true);
  const [validConfirmPass, setValidConfirmPass] = useState(true);

  const handleCheck = (e) => {
    switch (e.target.name) {
      case "password":
        credentials.password.length > 6
          ? setValidPass(true)
          : setValidPass(false);
        break;
      case "confirmPassword":
        credentials.password === credentials.confirmPassword
          ? setValidConfirmPass(true)
          : setValidConfirmPass(false);
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    setCredentials((credentials) => {
      return { ...credentials, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("api/register", { credentials }, config);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen mt-16 -z-50">
      <Meta title="Register | Bidme" />
      <h2 className="my-5 text-xl text-purple-800">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          {!validPass && <p style={{ color: "red" }}>not valid</p>}
          <input
            onBlur={handleCheck}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          {!validConfirmPass && <p style={{ color: "red" }}>not valid</p>}
          <input
            onBlur={handleCheck}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <button>Register</button>
        <Grid.Container gap={3} justify="center">
          <Grid xs={12}>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              width="100%"
              size="xl"
              clearable
              bordered
              labelPlaceholder="Email"
              color="secondary"
            />
          </Grid>
          <Grid xs={12}>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              width="100%"
              size="xl"
              bordered
              color="secondary"
              labelPlaceholder="Password"
            />
          </Grid>
          <Grid xs={12}>
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              width="100%"
              size="xl"
              bordered
              color="secondary"
              labelPlaceholder="Confirm Password"
            />
          </Grid>
          <Grid xs={12}>
            <Button
              type="submit"
              color="secondary"
              width="100%"
              size="lg"
              bordered
              css={{ width: "100%" }}
            >
              {loading ? <Loading color="currentColor" size="sm" /> : Submit}
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </div>
  );
}
