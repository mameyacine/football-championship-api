// routes/teamRoutes.js
const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// Exemple de route
router.get("/", teamController.getTeams);
router.get("/:id", teamController.getTeamById);
router.post("/", teamController.createTeam);
router.put("/:id", teamController.updateTeam);
router.delete("/:id", teamController.deleteTeam);
router.get("/country/:id", teamController.getTeamsByCountryId);

module.exports = router;