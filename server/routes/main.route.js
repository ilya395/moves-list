const express = require("express");
const { authRoutes } = require("../components/auth");

const apiRoutes = express.Router();

apiRoutes
  .use("/auth", authRoutes)

module.exports = apiRoutes;