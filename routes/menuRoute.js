const express = require("express");
const Menu = require("../models/menuModel");
const { valMenuId } = require("../middlewares/validations");

const route = express.Router();

route.post("/add", (req, res) => {
  const newItem = req.body;

  Menu.add(newItem)
    .then((item) => res.status(201).json(item))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.get("/get_menu", (req, res) => {
  Menu.getAll()
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.patch("/edit/:id", valMenuId, (req, res) => {
  // menu id
  const { id } = req.params;
  const changes = req.body;

  Menu.update(id, changes)
    .then(() => res.status(200).json({ message: "updated successfully." }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

route.delete("/delete/:id", valMenuId, (req, res) => {
  // menu id
  const { id } = req.params;

  Menu.remove(id)
    .then(() => res.status(200).json({ message: "deleted successfully" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

module.exports = route;
