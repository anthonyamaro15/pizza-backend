const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { valClientBody } = require("../middlewares/validations");

const Clients = require("../models/clientModel");

const route = express.Router();

route.post("/register", valClientBody, (req, res) => {
  const credentials = req.body;
  const { email } = req.body;

  // check if email already exist
  Clients.getBy({ email }).then((client) => {
    if (client.length) {
      res.status(500).json({ errorMessage: "Email already taken" });
    } else {
      // otherwise hash password
      const hash = bcrypt.hashSync(
        credentials.password,
        Number(process.env.ROUNDS)
      );
      credentials.password = hash;

      Clients.add(credentials)
        .then((id) => res.status(201).json(id))
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    }
  });
});

route.post("/login", valClientBody, (req, res) => {
  const { email, password } = req.body;

  // validate client password
  Clients.getBy({ email })
    .then(([client]) => {
      if (client && bcrypt.compareSync(password, client.password)) {
        // if password matches then create token
        const token = generateToken(client);
        res.status(200).json({ id: client.id, user: client.email, token });
      } else {
        res.status(401).json({ errorMessage: "Invalid email or password" });
      }
    })
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.delete("/delete_acc/:id", (req, res) => {
  const { id } = req.params;

  Clients.remove(id)
    .then(() => res.status(200).json({ message: "removed successfully" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

function generateToken(user) {
  const payload = {
    user: user.email,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, process.env.SECRET, options);
}

module.exports = route;
