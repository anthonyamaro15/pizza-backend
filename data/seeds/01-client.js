exports.seed = function (knex) {
  // Inserts seed entries
  return knex("clients").insert([
    { email: "client1@gmail.com", password: "testing" },
    { email: "client2@gmail.com", password: "lisa" },
  ]);
};
