import React from "react";
import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UsersForm";

function App() {
  return (
    <div className="App">
      <h2>Lord of the Rings Characthers.</h2>
      <Users />
      <br></br>
      <UserForm />
    </div>
  );
}

export default App;
