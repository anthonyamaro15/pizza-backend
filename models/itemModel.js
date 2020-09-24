const db = require("../data/config-data");

// add new client
function add(client) {
  return db("items").insert(client, "id");
}

// get items in cart
function getItemsInCart(id) {
  return db("items").where("items.user_id", id);
}

function getBy(filter) {
  return db("items").where(filter);
}

// get items by id
function getById(id) {
  return db("items").where({ id }).first();
}

// update items
function update(user_id, id, changes) {
  return db("items as i")
    .where("i.user_id", user_id)
    .where({ id })
    .update(changes, "id");
}

// delete items
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
