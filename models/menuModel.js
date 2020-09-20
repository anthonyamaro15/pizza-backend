const db = require("../data/config-data");

// add new items to the menu
async function add(item) {
  const [id] = await db("menu").insert(item, "id");
  return getById(id);
}

// get all menu
// seperated them here in the backend so front-end can just get the data expected and
// not having to filter all the data on the front.
// I'm gonna cache this data because it wont change at all,
async function getAll() {
  const pizzas = await db("menu as m").where("m.category", "pizzas");
  const salads = await db("menu as m").where("m.category", "salads");
  const appetizers = await db("menu as m").where("m.category", "appetizers");
  const pastas = await db("menu as m").where("m.category", "pastas");
  const combos = await db("menu as m").where("m.category", "combos");
  const sandwiches = await db("menu as m").where("m.category", "sandwiches");
  const desserts = await db("menu as m").where("m.category", "desserts");
  const drinks = await db("menu as m").where("m.category", "drinks");
  const extras = await db("menu as m").where("m.category", "extras");

  return {
    pizzas: splitStr(pizzas),
    salads: splitStr(salads),
    appetizers: splitStr(appetizers),
    pastas: splitStr(pastas),
    combos: splitStr(combos),
    sandwiches: splitStr(sandwiches),
    desserts: splitStr(desserts),
    drinks: splitStr(drinks),
    extras: splitStr(extras),
  };
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

// split this properties so we can just iterate over them and add them as select inputs.
function splitStr(arr) {
  let updatedMenu = arr.map((menu) => {
    return {
      ...menu,
      size_price: menu.size_price.split(","),
      cheese: menu.cheese ? menu.cheese.split(",") : "",
      dressing: menu.dressing ? menu.dressing.split(",") : "",
      peppers: menu.peppers ? menu.peppers.split(",") : "",
    };
  });

  return updatedMenu;
}

module.exports = {
  add,
  getAll,
  getBy,
  getById,
  update,
  remove,
};
