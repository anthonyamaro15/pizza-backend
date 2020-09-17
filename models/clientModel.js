const db = require("../data/config-data");

function add(client) {
  return db("clients").insert(client, "id");
}

function getBy(filter) {
  return db("clients").where(filter);
}

function getById(id) {
  return db("clients").where({ id }).first();
}

function update(id, changes) {
  return db("clients").where({ id }).update(changes);
}

function remove(id) {
  return db("clients").where({ id }).del();
}

module.exports = {
  add,
  getBy,
  getById,
  update,
  remove,
};
