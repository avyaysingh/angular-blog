const Sequelize = require("sequelize");
const db = require("../config/databae");

const Post = db.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  publish_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.DataTypes.NOW,
  },
});

module.exports = Post;
