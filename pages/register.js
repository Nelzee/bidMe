import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      </form>
    </div>
  );
}
