const db = require("../data/config-data");

function add(item) {
  return db("menu").insert(item, "id");
}

function getBy(filter) {
  return db("menu").where(filter);
}

function getById(id) {
  return db("menu").where({ id }).first();
}

function update(id, changes) {
  return db("menu").where({ id }).update(changes);
}

function remove(id) {
  return db("menu").where({ id }).del();
}

module.exports = {
  add,
  getBy,
  getById,
  update,
  remove,
};
