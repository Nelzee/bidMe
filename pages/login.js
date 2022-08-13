import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Meta from "../components/Meta";
import { addbid } from "../redux/bidsSlice";
import { login } from "../redux/userSlice";

export default function Register() {
  const dispatch = useDispatch();

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
    <div>
      <Meta title="Login | Bidme" />
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

        <button>Login</button>
      </form>
    </div>
  );
}
