import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function UserForm() {
  const [newUser, SetNewUser] = useState({});

  const handleChange = event => {
    SetNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://bk2016node-api1.herokuapp.com/api/users", newUser)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        id="name"
        value={newUser.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="bio"
        id="bio"
        value={newUser.bio}
        placeholder="Bio"
        onChange={handleChange}
      />
      <Button color="primary" type="submit">
        Add New User
      </Button>
    </form>
  );
}
