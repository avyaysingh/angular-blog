const Author = require("../models/author");
const Post = require("../models/post");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

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
// const createUser = async (req, res) => {
//   let { author_name, author_email } = req.body;
//   await Author.create({ author_name, author_email })
//     .then((result) => {
//       res.status(200).json({
//         message: `author added successfully with author id ${result.id}`,
//         post: result,
//       });
//     })
//     .catch((err) => console.log(err));
// };

//POST: register a new author/user

const createUser = asyncHandler(async (req, res) => {
  const { author_name, author_email, author_password } = req.body;

  if (!author_name || !author_email || !author_password) {
    res.status(400);
    throw new Error("Please add all fieds");
  }

  //check if user exits
  const userExists = await Author.findOne({
    where: { author_email: author_email },
  });

  if (userExists) {
    res.status(400);
    throw new Error("Author already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(author_password, salt);

  //create the user
  const author = await Author.create({
    author_name,
    author_email,
    author_password: hashedPassword,
  });

  if (author) {
    res.status(201).json({
      _id: author.id,
      author_name: author.author_name,
      author_email: author.author_email,
      token: generateToken(author.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid author data");
  }
});

// @desc Authenticate a User
// @route POST/api/users/login
// @access Public
const loginAuthor = asyncHandler(async (req, res) => {
  const { author_email, author_password } = req.body;

  //check for uer email
  const author = await Author.findOne({
    where: { author_email: author_email },
  });

  if (
    author &&
    (await bcrypt.compare(author_password, author.author_password))
  ) {
    res.json({
      _id: author.id,
      author_name: author.author_name,
      author_email: author.author_email,
      token: generateToken(author.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Get User data
// @route GET/api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  const { id, author_name, author_email } = await Author.findByPk(
    req.author.id
  );
  res.status(200).json({
    id: id,
    author_name,
    author_email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getAuthors,
  createUser,
  loginAuthor,
  getMe,
};
