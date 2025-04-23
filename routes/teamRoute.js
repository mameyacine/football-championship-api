// routes/teamRoutes.js
const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// Exemple de route
router.get("/", teamController.getCountries);

module.exports = router;