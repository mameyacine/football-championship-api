// routes/countryRoutes.js
const express = require("express");
const router = express.Router();
const championshipController = require("../controllers/championshipController");

// Exemple de route
router.get("/", championshipController.getCountries);

module.exports = router;