const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", gameController.getGames);
router.get("/:id", gameController.getGameById);
router.post("/", gameController.createGame);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);
router.get("/championship/:id", gameController.getGamesByChampionshipId);

module.exports = router;