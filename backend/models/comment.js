const Sequelize = require("sequelize");
const db = require("../config/databae");

const Comment = db.define("comment", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publish_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.DataTypes.NOW,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
