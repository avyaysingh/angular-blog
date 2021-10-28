const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//get all posts
router.get("/posts", postController.allPosts);

//get post based on id
router.get("/posts/:id", postController.post_details);

//add a post
router.post("/posts/create", postController.createPost);

//update post based on id
router.put("/posts/update/:id", postController.updatePost);

//delete a post
router.delete("/posts/delete/:id", postController.deletePost);

module.exports = router;
