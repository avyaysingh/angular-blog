const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

//adding comment to a post based on id
router.post("/posts/:id/comment", commentController.createComment);

module.exports = router;