import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(users =>
        this.setState({ users }, () => console.log("Users fetched...", users))
      );
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.name} {user.bio}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
