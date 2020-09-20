exports.seed = function (knex) {
  // Inserts seed entries
  return knex("clients").insert([
    {
      email: "client1@gmail.com",
      password: "testing",
      reset_link: "",
      first_name: "testing",
      last_name: "testing222",
      phone_number: "43434343",
      address: "here there over hter",
    },
    {
      email: "client2@gmail.com",
      password: "lisa",
      reset_link: "",
      first_name: "testing",
      last_name: "testing222",
      phone_number: "43434343",
      address: "here there over hter",
    },
  ]);
};
