const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restrictedRoute = require("../restricted/restricted_middleware");
const menuRoutes = require("../routes/menuRoute");
const clientRoutes = require("../routes/UserRoutes");
const userCartRoutes = require("../routes/userCartRoute");
const resetPassRoute = require("../routes/resetPasswordRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api", resetPassRoute);
app.use("/api", clientRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/cart", userCartRoutes);

module.exports = app;
