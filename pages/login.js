import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Meta from "../components/Meta";
import { addbid } from "../redux/bidsSlice";
import { login } from "../redux/userSlice";
import {
  Textarea,
  Grid,
  Input,
  Button,
  Loading,
  useInput,
} from "@nextui-org/react";

export default function Register() {
  const dispatch = useDispatch();
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const loading = true;
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [validPass, setValidPass] = useState(true);

  const handleCheck = (e) => {
    switch (e.target.name) {
      case "password":
        credentials.password.length > 6
          ? setValidPass(true)
          : setValidPass(false);
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

    const { data } = await axios.post("api/login", { credentials }, config);
    dispatch(login(data));
  };

  return (
    <div className="flex flex-col items-center min-h-screen mt-16 -z-50">
      <Meta title="Login | Bidme" />
      <h2 className="my-5 text-xl text-purple-800">Login</h2>
      <form onSubmit={handleSubmit}>
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
              {...bindings}
              shadow={false}
              onClearClick={reset}
              status={helper.color}
              helperColor={helper.color}
              label="Email"
              placeholder="With regex validation"
            />
          </Grid>
          <Grid xs={12}>
            <Input.Password
              onChange={handleChange}
              name="password"
              type="password"
              width="100%"
              size="xl"
              bordered
              color="secondary"
              labelPlaceholder="Password"
              clearable
              placeholder="Enter your password with eye"
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
        <Link href="/profile">Profile</Link>
      </form>
    </div>
  );
}
