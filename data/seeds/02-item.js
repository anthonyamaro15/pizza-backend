exports.seed = function (knex) {
  // Inserts seed entries
  return knex("items").insert([
    {
      name: "pizza",
      size_price: "23",
      price: 2,
      quantity: 1,
      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "pizzas",
      category_name: "pizza",
      user_id: 1,
    },
    {
      name: "dish cheese",
      size_price: "23",
      price: 2,
      quantity: 1,
      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "thin crust pizza",
      category_name: "pizza",
      user_id: 1,
    },
    {
      name: "hawaiian",
      size_price: "23",
      price: 2,
      quantity: 1,
      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "best",
      category_name: "pizza",
      user_id: 2,
    },
    {
      name: "pizza",
      size_price: "23",
      price: 2,
      quantity: 1,
      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "pizzas",
      category_name: "pizza",
      user_id: 2,
    },
  ]);
};
