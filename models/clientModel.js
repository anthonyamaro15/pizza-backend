const db = require("../data/config-data");

// add new clients
function add(client) {
  return db("clients").insert(client, "id");
}

function getBy(filter) {
  return db("clients").where(filter);
}

// get clients by id
function getById(id) {
  return db("clients").where({ id }).first();
}

// update client
function update(id, changes) {
  return db("clients").where({ id }).update(changes);
}

// remove client
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
