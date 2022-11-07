const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/all",userController.allUsers);

router.get("/random",userController.getRandomUser);

module.exports = router;