const Menu = require("../models/menuModel");
const Client = require("../models/clientModel");

// function to validate menu ids
function valMenuId(req, res, next) {
  const { id } = req.params;

  Menu.getById(id)
    .then((item) => {
      if (item) {
        next();
      } else {
        res
          .status(404)
          .json({ errorMessage: `menu not found with the id of ${id}` });
      }
    })
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
}

// function to validate client ids
function valClientId(req, res, next) {
  const { id } = req.params;

  Client.getById(id)
    .then((client) => {
      if (client) {
        next();
      } else {
        res
          .status(404)
          .json({ errorMessage: `client not found with the id of ${id}` });
      }
    })
    .catch((err) => res.status(500).json({ errorMessage: err.message }));
}

// function to validate client credentials
function valClientBody(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(500).json({ errorMessage: "Please enter email and password" });
  } else {
    next();
  }
}

module.exports = {
  valMenuId,
  valClientId,
  valClientBody,
};
