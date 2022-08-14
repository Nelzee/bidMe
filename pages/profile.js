import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const { firstName, lastName, email, phonenumber, idNumber } = user.userInfo;

  const [userDetails, setUserDetails] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    phonenumber: phonenumber || "",
    idNumber: idNumber || "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserDetails((userDetails) => {
      return { ...userDetails, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={userDetails.firstName}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={userDetails.lastName}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={userDetails.email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={userDetails.phonenumber}
          type="text"
          name="phonenumber"
          placeholderd="Phonenumber"
        />
        <input
          onChange={handleChange}
          value={userDetails.idNumber}
          type="text"
          name="idNumber"
          placeholder="ID Number"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
