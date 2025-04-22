const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// import le controlleur


router.get("/", userController.getUsers);
router.get("/id/:id", userController.getUserById);
router.get("/email/:email", userController.getUserByEmail);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router; 


