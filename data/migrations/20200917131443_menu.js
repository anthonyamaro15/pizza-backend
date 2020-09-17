exports.up = function (knex) {
  return knex.schema.createTable("menu", (table) => {
    table.increments();
    table.string("name", 255);
    table.string("size_price", 255);
    table.float("price");
    table.integer("quantity");
    table.string("description", 255);
    table.string("sauce", 255);
    table.string("dressing", 255);
    table.string("side", 255);
    table.string("cheese", 255);
    table.string("peppers", 255);
    table.string("img_url", 255);
    table.string("category", 255);
    table.string("category_name", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu");
};
