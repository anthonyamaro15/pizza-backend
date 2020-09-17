const express = require("express");
const Cart = require("../models/itemModel");
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

route.delete("/remove/:id", valClientId, (req, res) => {
  // client id
  const { id } = req.params;

  Cart.remove(id)
    .then(() => res.status(200).json({ message: "successfully removed" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

module.exports = route;
