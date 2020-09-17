const db = require("../data/config-data");

async function add(item) {
  const [id] = await db("menu").insert(item, "id");
  return getById(id);
}

function getAll() {
  return db("menu");
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
  getAll,
  getBy,
  getById,
  update,
  remove,
};
