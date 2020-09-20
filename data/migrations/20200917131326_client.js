exports.up = function (knex) {
  return knex.schema
    .createTable("clients", (table) => {
      table.increments();
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.string("email", 255).unique().notNullable();
      table.string("phone_number", 255).notNullable();
      table.string("address", 255).notNullable();
      table.string("password", 255).notNullable();
      table.string("reset_link", 255);
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
      table.string("category_name", 255);

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
