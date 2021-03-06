exports.seed = function (knex) {
  // Inserts seed entries
  return knex("menu").insert([
    {
      name: "pizza",
      size_price: "23",

      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "deep dish pizza",
      category_name: "pizza",
    },
    {
      name: "dish cheese",
      size_price: "23",

      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "thin crust pizza",
      category_name: "pizza",
    },
    {
      name: "hawaiian",
      size_price: "23",

      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "speciality pizza",
      category_name: "pizza",
    },
    {
      name: "pizza",
      size_price: "23",

      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "frozen pizzas",
      category_name: "pizza",
    },
    {
      name: "pizza",
      size_price: "23",

      description: "this is the best pizza",
      sauce: "tomate",
      dressing: "ranch",
      side: "coke",
      cheese: "american",
      peppers: "all",
      img_url: "imageurlsfsfsffsfsfsf",
      category: "popular combos",
      category_name: "pizza",
    },
  ]);
};
