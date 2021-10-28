const Sequelize = require("sequelize");
const db = require("../config/databae");

const Author = db.define("author", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  author_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Author;
