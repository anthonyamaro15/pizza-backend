const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restrictedRoute = require("../restricted/restricted_middleware");
const menuRoutes = require("../routes/menuRoute");
const clientRoutes = require("../routes/UserRoutes");
const userCartRoutes = require("../routes/userCartRoute");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api", clientRoutes);
server.use("/api/menu", menuRoutes);
server.use("/api/cart", userCartRoutes);

module.exports = server;
