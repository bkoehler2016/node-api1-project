import React, { useState } from "react";
import axios from "axios";

export default function UserForm() {
  const [newUser, SetNewUser] = useState({});

  const handleChange = event => {
    SetNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/api/users", newUser).then(res => {
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
      <button type="submit">Add New User</button>
    </form>
  );
}
