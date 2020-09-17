const db = require("../data/config-data");

function add(client) {
  return db("items").insert(client, "id");
}

function getItemsInCart(id) {
  return db("items").where("items.user_id", id);
}

function getBy(filter) {
  return db("items").where(filter);
}

function getById(id) {
  return db("items").where({ id }).first();
}

function update(id, changes) {
  return db("items").where({ id }).update(changes);
}

function remove(id) {
  return db("items").where({ id }).del();
}

module.exports = {
  add,
  getItemsInCart,
  getBy,
  getById,
  update,
  remove,
};
