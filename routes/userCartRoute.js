const express = require("express");
const Cart = require("../models/itemModel");
const User = require("../models/clientModel");
const { valClientId } = require("../middlewares/validations");

const route = express.Router();

route.post("/add", (req, res) => {
  const cartItems = req.body;

  return Cart.add(cartItems)
    .then((items) => res.status(201).json(items))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.get("/items_in_cart/:id", valClientId, (req, res) => {
  // client id
  const { id } = req.params;
  Cart.getItemsInCart(id)
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

// get user information
route.get("/user/:id", (req, res) => {
  const { id } = req.params;
  User.getClientById(id)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

route.patch("/update_item_in_cart/:user_id/:id", (req, res) => {
  const { user_id, id } = req.params;
  const changes = req.body;

  Cart.update(user_id, id, changes)
    .then(() => {
      res.status(200).json({ message: "Successfully updated" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

route.delete("/remove/:id", (req, res) => {
  // client id
  const { id } = req.params;

  Cart.remove(id)
    .then(() => res.status(200).json({ message: "successfully removed" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

module.exports = route;
