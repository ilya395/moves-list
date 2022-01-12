const express = require("express");
const authController = require("../controllers/auth.controller");

const authRoutes = express.Router();

authRoutes
  .route("/getToken")
  .post(authController.getAuth)

module.exports = authRoutes;