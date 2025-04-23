const express = require("express");
const router = express.Router();
const teamChampionshipController = require("../controllers/teamChampionshipController");

router.post("/add", teamChampionshipController.addTeamToChampionship);
router.get("/championship/:id/teams", teamChampionshipController.getTeamsByChampionshipId);
router.get("/team/:id/championships", teamChampionshipController.getChampionshipsByTeamId);

module.exports = router;