import axios from "axios";
import React, { useState } from "react";

export default function Register() {
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
    console.log(data);
  };

  return (
    <div>
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
