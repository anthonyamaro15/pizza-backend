exports.up = function (knex) {
  return knex.schema
    .createTable("clients", (table) => {
      table.increments();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).notNullable();
    })
    .createTable("items", (table) => {
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
      table
        .integer("user_id")
        .notNullable()
        .references("clients.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items").dropTableIfExists("clients");
};
