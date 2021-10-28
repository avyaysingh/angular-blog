const Author = require("../models/author");
const Post = require("../models/post");
const Comment = require("../models/comment");

Author.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(Author, { foreignKey: "authorId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

// get all posts:

const allPosts = async (req, res) => {
  await Post.findAll({ include: [Author, Comment] })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => console.log(err));
};

// get posts based on id:
const post_details = async (req, res) => {
  await Post.findByPk(req.params.id, {
    include: Comment,
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => console.log(err));
};

//create post
const createPost = async (req, res) => {
  let { category, title, description, authorId } = req.body;
  await Post.create({
    category,
    title,
    description,
    authorId,
  })
    .then((result) => {
      res.status(200).json({
        message: `post uploaded successfully with id = ${result.id}`,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

//update post end-point
const updatePost = async (req, res) => {
  const id = req.params.id;
  let { category, title, description } = req.body;
  try {
    const post = await Post.findOne({ where: { id } });
    post.category = category;
    post.title = title;
    post.description = description;

    //save the updated post in the database
    await post.save();

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

//delete post end-point
const deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findOne({ where: { id } });
  await post
    .destroy()
    .then((result) => {
      res.status(200).json({
        message: `deleted successfully a post with post id : ${result.id}`,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  allPosts,
  post_details,
  createPost,
  updatePost,
  deletePost,
};
