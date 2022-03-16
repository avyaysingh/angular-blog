const express = require("express");
const path = require("path");
const authorRoute = require("./routes/authorRoute");
const postRoute = require("./routes/postRoute");
const commentRoute = require("./routes/commentRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

//invalid endpoint for homepage
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

//author routes
app.use(authorRoute);

//post routes
app.use(postRoute);

//comment routes
app.use(commentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started at PORT: ${PORT}`));

// uncomment and run the following lines after
// creating models to automatically add foreign keys or the associations

// const sequelize = require("./config/databae");
// const Post = require("./models/post");
// const Comment = require("./models/comment");
// const Author = require("./models/author");

// Author.hasMany(Post);
// Post.hasMany(Comment);

// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
