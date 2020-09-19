const db = require("../data/config-data");

// add new items to the menu
async function add(item) {
  const [id] = await db("menu").insert(item, "id");
  return getById(id);
}

// get all menu
function getAll() {
  return db("menu");
}

function getBy(filter) {
  return db("menu").where(filter);
}

// find menu by id
function getById(id) {
  return db("menu").where({ id }).first();
}

// update item
function update(id, changes) {
  return db("menu").where({ id }).update(changes);
}

// remove item
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
