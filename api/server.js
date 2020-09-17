const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const menuRoutes = require("../routes/menuRoute");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/menu", menuRoutes);

module.exports = server;
