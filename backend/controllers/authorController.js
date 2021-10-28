const Author = require("../models/author");
const Post = require("../models/post");

//declaring associatiions:
Author.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(Author, { foreignKey: "authorId" });

// GET: get all authors
const getAuthors = async (req, res) => {
  await Author.findAll()
    .then((authors) => res.status(200).json(authors))
    .catch((err) => console.log(err));
};

// POST: create new author
const createUser = async (req, res) => {
  let { author_name, author_email } = req.body;
  await Author.create({ author_name, author_email })
    .then((result) => {
      res.status(200).json({
        message: `author added successfully with author id ${result.id}`,
        post: result,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAuthors,
  createUser,
};
