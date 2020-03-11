const express = require("express");
const Users = require("./data/db.js");
const server = express();
const cors = require("cors");

server.use(express.json());
// server.use(cors());
server.get("/", (req, res) => {
  res.json({ hello: "Success" });
});

// POST request to /api/users
server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  if (!userInfo.name || !userInfo.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    Users.insert(userInfo)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage:
            "There was an error while saving the user to the database"
        });
      });
  }
});

// GET request to /api/users
server.get("/api/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({
        errorMessage: "The users information could not be retrieved."
      });
    });
});

// GET request to /api/users:id
server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "The user information could not be retrieved." });
    });
});

// DELETE request to /api/users:id
server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ errorMessage: "The user could not be removed" });
    });
});

// PUT request to /api/users/:id
server.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  Users.update(id, updates)
    .then(user => {
      if (!user) {
        res.status(404).json({
          errorMessage: "The user with the specified ID does not exist."
        });
      } else if (!updates.name || !updates.bio) {
        res
          .status(400)
          .json({ errorMessage: "Please provide name and bio for the user." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ errorMessage: "The user could not be updated" });
    });
});
const port = 5000;
server.listen(port, () =>
  console.log(` Server started on http://localhost:${port} `)
);
