const express = require("express");
const Menu = require("../models/menuModel");
const redis = require("redis");
const { valMenuId } = require("../middlewares/validations");

const route = express.Router();

const client = redis.createClient(process.env.REDIS_URL);

route.post("/add", async (req, res) => {
  const newItem = req.body;

  client.del("menu");

  try {
    const itemAdded = await Menu.add(newItem);
    const menu = await Menu.getAll();
    res.status(201).json(itemAdded);
    client.set("menu", JSON.stringify(menu));
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

route.get("/get_menu", (req, res) => {
  client.get("menu", (err, data) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    }
    if (data !== null) {
      let menu = JSON.parse(data);
      res.status(200).json(menu);
    } else {
      Menu.getAll()
        .then((menu) => {
          res.status(200).json(menu);
          client.set("menu", JSON.stringify(menu));
        })
        .catch((err) => res.status(500).json({ errorMessage: err.message }));
    }
  });
});

route.patch("/edit/:id", valMenuId, async (req, res) => {
  // menu id
  const { id } = req.params;
  const changes = req.body;

  client.del("menu");

  try {
    const successfullMessage = await Menu.update(id, changes);
    const menu = await Menu.getAll();
    res
      .status(200)
      .json({ message: "updated successfully.", successfullMessage });
    client.set("menu", JSON.stringify(menu));
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

route.delete("/delete/:id", valMenuId, (req, res) => {
  // menu id
  const { id } = req.params;

  Menu.remove(id)
    .then(() => res.status(200).json({ message: "deleted successfully" }))
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
});

module.exports = route;
