const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

//GET: get authors route
router.get("/authors", authorController.getAuthors);

//create user route
router.post("/authors/create", authorController.createUser);

module.exports = router;