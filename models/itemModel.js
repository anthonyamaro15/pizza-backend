const db = require("../data/config-data");

// add new client
function add(client) {
  return db("items").insert(client, "id");
}

// get items in cart
async function getItemsInCart(id) {
  const items = await db("items").where("items.user_id", id);

  return items.map((item) => {
    return {
      ...item,
      price: item.price * item.quantity,
    };
  });
}

// generate random salad and appetizer for every client.
async function generateMeal() {
  const salad = await db("menu as m").where("m.category", "salads");
  const appetizer = await db("menu as m").where("m.category", "appetizers");
  const dessert = await db("menu as m").where("m.category", "desserts");

  let randomSalad = randomNumber(salad);
  let randomAppetizer = randomNumber(appetizer);
  return [randomSalad, randomAppetizer, dessert[0]];
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

// delete item by id
function remove(id) {
  return db("items").where({ id }).del();
}

// delete items from user cart
function removeFromCart(user_id) {
  return db("items as i").where("i.user_id", user_id).del();
}

function randomNumber(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

module.exports = {
  add,
  getItemsInCart,
  getBy,
  getById,
  update,
  remove,
  removeFromCart,
  generateMeal,
};
