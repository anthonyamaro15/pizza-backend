const express = require("express");
const Cart = require("../models/itemModel");
const User = require("../models/clientModel");
const { valClientId } = require("../middlewares/validations");

const route = express.Router();

// Route to send random meals suggestions
route.get("/complete_meal", (req, res) => {
  Cart.generateMeal()
    .then((meals) => {
      res.status(200).json(meals);
    })
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

// add items to user cart
route.post("/add", (req, res) => {
  const cartItems = req.body;

  return Cart.add(cartItems)
    .then((items) => res.status(201).json(items))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

// get items from user cart
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

route.delete("/remove/:item_id", (req, res) => {
  // item_id id
  const { item_id } = req.params;

  Cart.remove(item_id)
    .then(() => res.status(200).json({ message: "successfully removed" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.delete("/remove_cart_items/:user_id", (req, res) => {
  const { user_id } = req.params;

  Cart.removeFromCart(user_id)
    .then(() =>
      res.status(200).json({ message: "successfully removed items from cart" })
    )
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

module.exports = route;
