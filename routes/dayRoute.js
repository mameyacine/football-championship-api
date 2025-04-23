// routes/dayRoutes.js
const express = require("express");
const router = express.Router();
const dayController = require("../controllers/dayController");

// Exemple de route
router.get("/", dayController.getCountries);

module.exports = router;