import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
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
              <Row className="name">Name: {user.name}</Row>
              <Row>Bio: {user.bio}</Row>
              {/* <Row>
                <Button>Edit</Button>

                <Button color="danger">Delete</Button>
              </Row> */}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Users;
