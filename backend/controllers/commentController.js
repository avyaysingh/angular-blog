const Post = require("../models/post");
const Comment = require("../models/comment");

//declaring associations
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

//create comment end-point
const createComment = async (req, res) => {
  let { name, body, postId } = req.body;
  await Comment.create({ name, body, postId })
    .then((result) => {
      res.status(200).json({
        message: `Comment added for post: ${postId}`,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createComment,
};
