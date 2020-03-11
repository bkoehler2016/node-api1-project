import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Users.css";

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
      <Container>
        <Row>
          {this.state.users.map(user => (
            <Col xs="6" key={user.id}>
              <Row>{user.name}</Row>
              <Row>{user.bio}</Row>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Users;
