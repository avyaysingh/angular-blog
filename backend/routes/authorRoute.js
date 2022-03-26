const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const { protect } = require("../middleware/authMiddleware");

//GET: get authors route
router.get("/authors", authorController.getAuthors);

//create user route
router.post("/authors/create", authorController.createUser);

router.post("/authors/login", authorController.loginAuthor);
router.get("/authors/me", protect, authorController.getMe);

module.exports = router;
